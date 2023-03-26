## HQ-ALS1
model: WS-C2960+24TC-L
```lua
en
conf t
host HQ-ALS1
no ip domain-lookup

!! portchannel to DLS1
int range fa0/1-2
    channel-group 1 mode active
int port-channel 1
    switchport mode trunk

!! portchannel to DLS2
int range fa0/5-6
    channel-group 2 mode active
int port-channel 2
    switchport mode trunk

!! access ports
int fa0/7
    switchport access vlan 10
int fa0/8
    switchport access vlan 20
int fa0/9
    switchport access vlan 100
int fa0/10
    switchport access vlan 110
int fa0/11
    switchport access vlan 200
int fa0/12
    switchport access vlan 300

!! vtp
vtp mode client
vtp domain rp6_hq
vtp password banaan123
end

!! alleen voor de packet tracer
copy running-config startup-config
```
