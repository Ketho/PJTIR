```lua
// eerst hostname toevoegen 
username cisco password 0 cisco
ip domain-name SSH
crypto key generate rsa 
1024
ip ssh version 2
ip ssh time-out 60
no ip domain-lookup
enable password cisco
service password-encryption 
line vty 0 4
 login local
 transport input ssh
line vty 5 15
 login local
 transport input ssh
end
```
