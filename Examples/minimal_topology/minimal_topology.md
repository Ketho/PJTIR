![](https://github.com/Ketho/PJTIR/blob/master/Examples/minimal_topology/minimal_topology.png)

## R1 - 4311
```lua
en
conf t
host R1
no ip domain-lookup
ipv6 unicast
int g0/0/0
    ipv6 addr 2020::40:0/127
    no sh
ipv6 route 2020::10:0/112 2020::40:1
end
```

## MLS1 - 3650
```lua
en
conf t
host MLS1
no ip domain-lookup
ipv6 unicast
int g1/0/1
    no switchport
    ipv6 addr 2020::40:1/127
int g1/0/2
    switchport mode trunk
vlan 10
int vlan 10
    ipv6 addr 2020::10:0/112
end
```

## S1 - 2960
```lua
en
conf t
host S1
no ip domain-lookup
int fa0/1
    switchport mode trunk
int fa0/2
    switchport mode access
    switchport access vlan 10
end
```

## hosts
- PC0: `2020::10:10/112`, gateway `2020::10:0`

## tests
- ping PC0 -> R1 g0/0/0  
`ping 2020::40:0`
