## BR-DLS1
model: WS-C3560-24PS-E

```lua
en
conf t
host BR-DLS1
no ip domain-lookup
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
    switchport mode trunk

!! routing
ipv6 router ospf 1
    router-id 21.1.1.1

!! inter-vlan routing
int vlan 10
    ipv6 addr 2a02:a420:b:2a1::0/64
    ipv6 ospf 1 area 0
int vlan 20
    ipv6 addr 2a02:a420:b:2a2::0/64
    ipv6 ospf 1 area 0
int vlan 100
    ipv6 addr 2a02:a420:b:2a3::0/64
    ipv6 ospf 1 area 0
int vlan 110
    ipv6 addr 2a02:a420:b:2a4::0/64
    ipv6 ospf 1 area 0
int vlan 200
    ipv6 addr 2a02:a420:b:2a5::0/64
    ipv6 ospf 1 area 0
int vlan 300
    ipv6 addr 2a02:a420:b:2a6::0/64
    ipv6 ospf 1 area 0

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


!! ssh apart instellen
conf t
int vlan 1
    ipv6 addr 2a02:a420:b:2a0::0/64
    ipv6 ospf 1 area 0
ip domain name pjtir6.local
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
