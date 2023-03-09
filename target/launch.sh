#!/bin/bash

/etc/init.d/ssh restart
/etc/init.d/vsftpd restart

php -S 0.0.0.0:8080 -t ./lfi &
./ynetd -a 0.0.0.0 -p 1337 -se y ./pwn/main &
./ynetd -a 0.0.0.0 -p 1234 -se y ./jail/jail.py &

for job in `jobs -p`; do
  wait $job
done

exit $?
