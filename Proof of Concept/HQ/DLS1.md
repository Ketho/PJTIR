## HQ-DLS1
model: WS-C3650-24TS-E
```lua
en
conf t
host HQ-DLS1
no ip domain-lookup
banner motd $ forbidden access for strangers $
ipv6 unicast

!! loopback
int lo0
    ipv6 addr 2a02:a420:b:120::f:0/112
    ipv6 ospf 1 area 0
!! routed port to R1
int g1/0/7
    no switchport
    ipv6 addr 2a02:a420:b:110::10:1/127
    ipv6 ospf 1 area 0
    no sh
!! routed port to R2
int g1/0/8
    no switchport
    ipv6 addr 2a02:a420:b:111::11:1/127
    ipv6 ospf 1 area 0
    no sh

!! L3 portchannel to DLS2
no int port-channel 1
int range g1/0/3-4
    no switchport
    channel-group 1 mode active
int port-channel 1
    ipv6 addr 2a02:a420:b:120::10:0/127
    ipv6 ospf 1 area 0

!! portchannel to ALS1
int range g1/0/1-2
    channel-group 2 mode active
int port-channel 2
    switchport mode trunk

!! portchannel to ALS2
int range g1/0/5-6
    channel-group 3 mode active
int port-channel 3
    switchport mode trunk

!! routing
ipv6 router ospf 1
    router-id 11.1.1.1

!! inter-vlan routing
int vlan 10
    ipv6 addr 2a02:a420:b:1a1::0/64
    ipv6 ospf 1 area 0
    !! dhcpv6
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:110::10:0
    !! hsrpv2
    standby version 2
    standby 10 ipv6 2a02:a420:b:1a1::2/64
    standby 10 priority 105
    standby 10 preempt
    standby 10 track 1 decrement 20
    ipv6 traffic-filter Rechten in
int vlan 20
    ipv6 addr 2a02:a420:b:1a2::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:110::10:0
    standby version 2
    standby 20 ipv6 2a02:a420:b:1a2::2/64
    standby 20 priority 105
    standby 20 preempt
    standby 20 track 1 decrement 20
    ipv6 traffic-filter Rechten in
int vlan 100
    ipv6 addr 2a02:a420:b:1a3::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:110::10:0
    standby version 2
    standby 100 ipv6 2a02:a420:b:1a3::2/64
    standby 100 priority 105
    standby 100 preempt
    standby 100 track 1 decrement 20
    ipv6 traffic-filter Rechten in
int vlan 110
    ipv6 addr 2a02:a420:b:1a4::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:110::10:0
    standby version 2
    standby 110 ipv6 2a02:a420:b:1a4::2/64
    standby 110 priority 105
    standby 110 preempt
    standby 110 track 1 decrement 20
    ipv6 traffic-filter Rechten in
int vlan 200
    ipv6 addr 2a02:a420:b:1a5::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:110::10:0
    standby version 2
    standby 200 ipv6 2a02:a420:b:1a5::2/64
    standby 200 priority 105
    standby 200 preempt
    standby 200 track 1 decrement 20
    ipv6 traffic-filter Rechten in
int vlan 300
    ipv6 addr 2a02:a420:b:1a6::0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2a02:a420:b:110::10:0
    standby version 2
    standby 300 ipv6 2a02:a420:b:1a6::2/64
    standby 300 priority 105
    standby 300 preempt
    standby 300 track 1 decrement 20
    ipv6 traffic-filter Rechten in

!! hsrp track R1
track 1 int g1/0/7 line-protocol

!! shutdown unused ports
int range g1/0/9-24
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
vtp domain rp6_hq_vtp
vtp password banaan123

!! ACLs
ipv6 access-list Rechten
    permit icmp any any echo-reply sequence 10
    deny ipv6 any 2A02:A420:B:1A1::/64 sequence 20
    permit ipv6 any any sequence 30
ipv6 access-list Voorrang
    permit ipv6 2A02:A420:B:1A1::/64 any sequence 10
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
int range g1/0/1-24
ipv6 flow monitor monitor1 input
end

!! qos
conf t
class-map ICT
    match access-group name Voorrang
policy-map ICT
    class ICT
    set dscp ef
class class-default
    police 45000000
    exceed-action drop
int gi1/0/1
    service-policy input ICT
    service-policy output ICT
int gi1/0/2
    service-policy input ICT
    service-policy output ICT
int gi1/0/5
    service-policy input ICT
    service-policy output ICT
int gi1/0/6
    service-policy input ICT
    service-policy output ICT
end

!! ssh apart instellen
conf t
int vlan 1
    ipv6 addr 2a02:a420:b:1a0::0/64
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
