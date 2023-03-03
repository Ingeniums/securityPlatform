#!/bin/bash

/etc/init.d/ssh restart
/etc/init.d/vsftpd restart

php -S 0.0.0.0:8000 -t ./lfi &
./pwn/ynetd -p 3000 -se y ./pwn/main &

for job in `jobs -p`; do
  wait $job
done

exit $?
