## BR-DLS1
model: WS-C3560-24PS-E

```lua
en
conf t
host BR-DLS1
no ip domain-lookup
ipv6 unicast

!! routed port to R1
int f0/7
    no switchport
    ipv6 addr 2a02:a420:b:220::10:1/127
    ipv6 ospf 1 area 0
    no sh

!! portchannel to ALS1
int range f0/1-2
    channel-group 2 mode active
int port-channel 2
    switchport mode trunk

!! portchannel to ALS2
int range f0/5-6
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

## info
- need to enable ipv6 on the switch first and reboot
- does not need to save startup config
-- https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_52_se/configuration/guide/3560scg/swipv6.html
```lua
sdm prefer dual-ipv4-and-ipv6 routing
```
```lua
BR-DLS1(config)#do show sdm prefer
 The current template is "desktop default" template.
 The selected template optimizes the resources in
 the switch to support this level of features for
 8 routed interfaces and 1024 VLANs.

  number of unicast mac addresses:                  6K
  number of IPv4 IGMP groups + multicast routes:    1K
  number of IPv4 unicast routes:                    8K
    number of directly-connected IPv4 hosts:        6K
    number of indirect IPv4 routes:                 2K
  number of IPv4 policy based routing aces:         0
  number of IPv4/MAC qos aces:                      0.5K
  number of IPv4/MAC security aces:                 1K

 On next reload, template will be "desktop IPv4 and IPv6 routing" template.
```
```lua
 The current template is "desktop IPv4 and IPv6 routing" template.
 The selected template optimizes the resources in
 the switch to support this level of features for
 8 routed interfaces and 1024 VLANs.

  number of unicast mac addresses:                  1.5K
  number of IPv4 IGMP groups + multicast routes:    1K
  number of IPv4 unicast routes:                    2.75K
    number of directly-connected IPv4 hosts:        1.5K
    number of indirect IPv4 routes:                 1.25K
  number of IPv6 multicast groups:                  1.125k
  number of directly-connected IPv6 addresses:      1.5K
  number of indirect IPv6 unicast routes:           1.25K
  number of IPv4 policy based routing aces:         0.25K
  number of IPv4/MAC qos aces:                      0.5K
  number of IPv4/MAC security aces:                 0.5K
  number of IPv6 policy based routing aces:         0.25K
  number of IPv6 qos aces:                          0.625k
  number of IPv6 security aces:                     0.5K
```