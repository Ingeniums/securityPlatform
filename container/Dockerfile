# docker run -d -v $PWD/../flag:/flag -p 3000:3000 -p 8000:8000 -p 2222:22 -p 2121:21 --rm sobercq
FROM php:latest

RUN echo "root:very_cool_root_pwd" | chpasswd

WORKDIR /root
COPY ./launch.sh .
COPY pwn ./pwn
COPY lfi ./lfi

RUN apt-get update; \
  apt-get install -y ssh vsftpd;

RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' /etc/pam.d/sshd
RUN sed -i 's/anonymous_enable=NO/anonymous_enable=YES/' /etc/vsftpd.conf

USER root
EXPOSE 8000
EXPOSE 3000
EXPOSE 21
EXPOSE 22

VOLUME ../flag /flag

RUN chmod +x ./launch.sh ./pwn/ynetd ./pwn/main

CMD ["./launch.sh"]
