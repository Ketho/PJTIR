## BR-DLS1
model: WS-C3650-24TS-E
```lua
en
conf t
host BR-DLS1
no ip domain-lookup
ipv6 unicast

!! routed port to R1
int g1/0/7
    no switchport
    ipv6 addr 2a02:a420:b:220::10:1/127
    ipv6 ospf 1 area 0
    no sh

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

!! switching
vlan 10
int vlan 10
    ipv6 addr 2a02:a420:b:251::0/64
    ipv6 ospf 1 area 0
vlan 20
int vlan 20
    ipv6 addr 2a02:a420:b:252::0/64
    ipv6 ospf 1 area 0
vlan 100
int vlan 100
    ipv6 addr 2a02:a420:b:260::0/64
    ipv6 ospf 1 area 0

!! routing
ipv6 router ospf 1
    router-id 21.1.1.1
end
!! alleen voor de packet tracer
copy running-config startup-config
```
