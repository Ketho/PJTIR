## ALS2 - WS-C2960
```lua
en
conf t
host ALS2
no ip domain-lookup

!! portchannel to DLS2
int range fa0/1-2
    channel-group 1 mode active
int port-channel 1
    switchport mode trunk

!! portchannel to DLS1
int range fa0/5-6
    channel-group 2 mode active
int port-channel 2
    switchport mode trunk

int fa0/7
    switchport access vlan 20
end
```
