## HQ-DLS1
model: WS-C3650-24TS-E
```lua
en
conf t
host HQ-DLS1
no ip domain-lookup
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
int vlan 20
    ipv6 addr 2a02:a420:b:1a2::0/64
    ipv6 ospf 1 area 0
int vlan 100
    ipv6 addr 2a02:a420:b:1a10::0/64
    ipv6 ospf 1 area 0
int vlan 110
    ipv6 addr 2a02:a420:b:1a11::0/64
    ipv6 ospf 1 area 0
int vlan 200
    ipv6 addr 2a02:a420:b:1a20::0/64
    ipv6 ospf 1 area 0
int vlan 300
    ipv6 addr 2a02:a420:b:1a30::0/64
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
vtp domain rp6_hq
vtp password banaan123
end


!! ssh apart instellen
conf t
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
