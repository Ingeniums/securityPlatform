#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>

void win(void) { system("/bin/sh"); }

int main(void) {
  char buffer[16];

  setvbuf(stdout, NULL, _IONBF, 0);
  setvbuf(stdin, NULL, _IONBF, 0);
  setvbuf(stderr, NULL, _IONBF, 0);

  printf("I am a program in binary form,\n");
  printf("With tricks and treats to keep you warm.\n");
  printf("My architecture is AMD64,\n");
  printf("And I'm an ELF, don't you ignore!\n\n");

  printf("My stack canary's not set high,\n");
  printf("So a buffer overflow you can try.\n");
  printf("But first you need to pad it well,\n");
  printf("Twenty-four bytes, and then you'll tell.\n\n");

  printf("At %p a return gadget you need,\n", win + 21);
  printf("To align the stack and make it succeed.\n");
  printf("And at %p you will find,\n", win);
  printf("The win function that's on your mind.\n\n");

  printf(">> ");

  gets(buffer);
}
