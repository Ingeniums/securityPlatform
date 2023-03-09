FROM php:latest

RUN echo "root:very_cool_root_pwd" | chpasswd

WORKDIR /root
COPY ./launch.sh .
COPY ./ynetd .
COPY pwn ./pwn
COPY lfi ./lfi
COPY jail ./jail

RUN apt-get update; \
  apt-get install -y python3 ssh vsftpd;

RUN mkdir -p /var/run/vsftpd/empty \
 && mkdir -p /etc/vsftpd \
 && mkdir -p /var/ftp \
 && mv /etc/vsftpd.conf /etc/vsftpd.orig

ADD vsftpd.sh .
RUN chmod +x ./launch.sh ./ynetd ./pwn/main ./jail/jail.py ./vsftpd.sh
RUN ./vsftpd.sh

RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' /etc/pam.d/sshd

USER root
EXPOSE 8080
EXPOSE 1337
EXPOSE 1234
EXPOSE 21
EXPOSE 22

CMD ["./launch.sh"]
