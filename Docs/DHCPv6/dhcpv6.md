# working dhcpv6 - 2 routers
R1
```lua
en
conf t
host R1
no ip domain-lookup
ipv6 unicast
int g0/0/0
    ipv6 addr 2001:db8:acad:1::1/64
    ipv6 nd other-config-flag
    ipv6 dhcp server miku
    no sh
ipv6 dhcp pool miku
    dns-server 2001:db8:acad::254
    domain-name STATELESS.com
ipv6 route ::/0 2001:db8:acad:1::2
end
```

R2
```lua
en
conf t
host R2
no ip domain-lookup
ipv6 unicast
int g0/0/0
    ipv6 addr 2001:db8:acad:1::2/64
    no sh
int g0/0/1
    ipv6 addr 2001:db8:acad:2::1/64
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2001:DB8:ACAD:1::1
    no sh
ipv6 route ::/0 2001:db8:acad:1::1
end
```

# working dhcpv6 - router, mls
R1
```lua
en
conf t
host R1
no ip domain-lookup
ipv6 unicast
int g0/0/0
    ipv6 addr 2010::10:0/127
    ipv6 nd other-config-flag
    ipv6 dhcp server miku
    ipv6 ospf 1 area 0
    no sh
ipv6 dhcp pool miku
    dns-server 2090::1
    domain-name snowmiku
ipv6 router ospf 1
    router-id 1.1.1.1
end
```

DLS1
```lua
en
conf t
host DLS1
no ip domain-lookup
ipv6 unicast

!! routed port to R1
int g1/0/1
    no switchport
    ipv6 addr 2020::10:1/127
    ipv6 ospf 1 area 0
    no sh

int g1/0/2
    switchport mode access
    switchport access vlan 10

!! switching
vlan 10
int vlan 10
    ipv6 addr 2040::10:0/64
    ipv6 ospf 1 area 0
    ipv6 nd other-config-flag
    ipv6 dhcp relay destination 2010::10:0

!! routing
ipv6 router ospf 1
    router-id 2.2.2.2
end
```
