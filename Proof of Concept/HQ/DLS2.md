## HQ-DLS2
model: WS-C3650-24TS-E
```lua
en
conf t
host HQ-DLS2
no ip domain-lookup
ipv6 unicast

!! loopback
int lo0
    ipv6 addr 2a02:a420:b:121::f:0/112
    ipv6 ospf 1 area 0
!! routed port to R1
int g1/0/7
    no switchport
    ipv6 addr 2a02:a420:b:111::10:1/127
    ipv6 ospf 1 area 0
    no sh
!! routed port to R2
int g1/0/8
    no switchport
    ipv6 addr 2a02:a420:b:110::11:1/127
    ipv6 ospf 1 area 0
    no sh

!! L3 portchannel to DLS1
int range g1/0/3-4
    no switchport
    channel-group 1 mode active
int port-channel 1
    ipv6 addr 2a02:a420:b:120::10:1/127
    ipv6 ospf 1 area 0

!! portchannel to ALS2
int range g1/0/1-2
    channel-group 2 mode active
int port-channel 2
    switchport mode trunk

!! portchannel to ALS1
int range g1/0/5-6
    channel-group 3 mode active
int port-channel 3
    switchport mode trunk

!! routing
ipv6 router ospf 1
    router-id 11.2.2.2

!! inter-vlan routing
int vlan 10
    ipv6 addr 2a02:a420:b:1b1::1/64
    ipv6 ospf 1 area 0
int vlan 20
    ipv6 addr 2a02:a420:b:1b2::1/64
    ipv6 ospf 1 area 0
int vlan 100
    ipv6 addr 2a02:a420:b:1b10::1/64
    ipv6 ospf 1 area 0
int vlan 110
    ipv6 addr 2a02:a420:b:1b11::1/64
    ipv6 ospf 1 area 0
int vlan 200
    ipv6 addr 2a02:a420:b:1b20::1/64
    ipv6 ospf 1 area 0
int vlan 300
    ipv6 addr 2a02:a420:b:1b30::1/64
    ipv6 ospf 1 area 0

!! vtp
vtp mode client
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
