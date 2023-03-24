## BR-ALS1
model: WS-C2960+24TC-L
```lua
en
conf t
host BR-ALS1
no ip domain-lookup

!! portchannel to DLS1
int range fa0/1-2
    channel-group 1 mode active
int port-channel 1
    switchport mode trunk

int fa0/7
    switchport access vlan 10
int fa0/8
    switchport access vlan 20
int fa0/9
    switchport access vlan 100
end

!! alleen voor de packet tracer
copy running-config startup-config
```
