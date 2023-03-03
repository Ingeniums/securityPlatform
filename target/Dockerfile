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
EXPOSE 8080
EXPOSE 1337
EXPOSE 21
EXPOSE 22

RUN chmod +x ./launch.sh ./pwn/ynetd ./pwn/main

CMD ["./launch.sh"]
