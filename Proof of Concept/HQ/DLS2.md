## HQ-DLS2
model: WS-C3650-24TS-E
```lua
en
conf t
host HQ-DLS2
no ip domain-lookup
ipv6 unicast

!! routed port to R1
int g1/0/7
    no switchport
    ipv6 addr 2a02:a420:b:120::11:1/127
    ipv6 ospf 1 area 0
    no sh

!! L3 portchannel to DLS1
int range g1/0/3-4
    no switchport
    channel-group 1 mode on
int port-channel 1
    ipv6 addr 2a02:a420:b:120::30:1/127
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

!! switching
vlan 10
int vlan 10
    ipv6 addr 2a02:a420:b:130::1/64
    ipv6 ospf 1 area 0
vlan 20
int vlan 20
    ipv6 addr 2a02:a420:b:131::1/64
    ipv6 ospf 1 area 0
spanning-tree vlan 20 root primary

!! routing
ipv6 router ospf 1
    router-id 3.3.3.3
end
```
