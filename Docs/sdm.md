## sdm 3560
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


## 2960
```lua
sdm prefer dual-iconf pv4-and-ipv6 default
```
```lua
HQ-ALS1#sh sdm p
 The current template is "default" template.
 The selected template optimizes the resources in
 the switch to support this level of features for
 0 routed interfaces and 255 VLANs.

  number of unicast mac addresses:                  8K
  number of IPv4 IGMP groups + multicast routes:    0.25K
  number of IPv4 unicast routes:                    0
  number of IPv6 multicast groups:                  0
  number of IPv6 unicast routes:                    0
    number of directly-connected IPv6 addresses:    0
    number of indirect IPv6 unicast routes:         0
  number of IPv4 policy based routing aces:         0
  number of IPv4/MAC qos aces:                      0.125k
  number of IPv4/MAC security aces:                 0.375k
  number of IPv6 policy based routing aces:         0
  number of IPv6 qos aces:                          20
  number of IPv6 security aces:                     25

HQ-ALS1(config)#sdm prefer dual-ipv4-and-ipv6 default
Changes to the running SDM preferences have been stored, but cannot take effect
until the next reload.
Use 'show sdm prefer' to see what SDM preference is currently active.
HQ-ALS1#sh sd
*Mar  1 00:50:55.374: %SYS-5-CONFIG_I: Configured from console by co
HQ-ALS1#sh sdm p
 The current template is "default" template.
 The selected template optimizes the resources in
 the switch to support this level of features for
 0 routed interfaces and 255 VLANs.

  number of unicast mac addresses:                  8K
  number of IPv4 IGMP groups + multicast routes:    0.25K
  number of IPv4 unicast routes:                    0
  number of IPv6 multicast groups:                  0
  number of IPv6 unicast routes:                    0
    number of directly-connected IPv6 addresses:    0
    number of indirect IPv6 unicast routes:         0
  number of IPv4 policy based routing aces:         0
  number of IPv4/MAC qos aces:                      0.125k
  number of IPv4/MAC security aces:                 0.375k
  number of IPv6 policy based routing aces:         0
  number of IPv6 qos aces:                          20
  number of IPv6 security aces:                     25

 On next reload, template will be "dual-ipv4-and-ipv6 default" template.
```