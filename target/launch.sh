#!/bin/bash

/etc/init.d/ssh restart
/etc/init.d/vsftpd restart

php -S 0.0.0.0:8080 -t ./lfi &
./pwn/ynetd -p 1337 -se y ./pwn/main &

for job in `jobs -p`; do
  wait $job
done

exit $?
