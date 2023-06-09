## BR-DLS1
model: WS-C3560-24PS-E

```lua
en
conf t
host BR-DLS1
no ip domain-lookup
banner motd $ forbidden access for strangers $
ipv6 unicast

!! loopback
int lo0
    ipv6 addr 2a02:a420:b:220::f:0/112
    ipv6 ospf 1 area 0
!! routed port to R1
int fa0/7
    no switchport
    ipv6 addr 2a02:a420:b:220::10:1/127
    ipv6 ospf 1 area 0
    no sh

!! portchannel to ALS1
int range fa0/1-2
    channel-group 1 mode active
int port-channel 1
    switchport trunk encapsulation dot1q
    switchport mode trunk

!! routing
ipv6 router ospf 1
    router-id 21.1.1.1

!! inter-vlan routing
int vlan 10
    ipv6 addr 2a02:a420:b:2a1::0/64
    ipv6 ospf 1 area 0
    !! dhcpv6
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:210::10:0
int vlan 20
    ipv6 addr 2a02:a420:b:2a2::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:210::10:0
int vlan 100
    ipv6 addr 2a02:a420:b:2a3::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:210::10:0
int vlan 110
    ipv6 addr 2a02:a420:b:2a4::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:210::10:0
int vlan 200
    ipv6 addr 2a02:a420:b:2a5::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:210::10:0
int vlan 300
    ipv6 addr 2a02:a420:b:2a6::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:210::10:0

!! shutdown unused ports
int range fa0/3-6,fa0/8-24
    shutdown

!! vlans
vlan 10
    name ict
vlan 20
    name servers
vlan 100
    name directie
vlan 110
    name administratie
vlan 200
    name productie
vlan 300
    name wifi_gast

!! vtp
vtp mode server
vtp domain rp6_br_vtp
vtp password banaan123
end

!! monitoring
conf t
flow exporter exporter1
destination 2a02:a420:b:1a1::10
transport udp 9997

snmp-server community public

flow record record1
    match ipv6 traffic-class
    match ipv6 protocol
    match ipv6 destination address
    match ipv6 source address
    match transport source-port
    match transport destination-port
    collect counter bytes long
    collect counter packets long
flow monitor monitor1
    record record1
    exporter exporter1
interface rang fa0/1-8
ipv6 flow monitor monitor1 input
end


!! ssh apart instellen
conf t
int vlan 1
    ipv6 addr 2a02:a420:b:2a0::0/64
    ipv6 ospf 1 area 0
    no sh
ip domain name pjtir6.net
!! handmatig 1024 invoeren
crypto key generate rsa

ip ssh version 2
service password-encryption
username cisco password cisco
username cisco privilege 15
line vty 0 4
    login local
    transport input ssh
end

!! alleen voor de packet tracer
copy running-config startup-config
```
