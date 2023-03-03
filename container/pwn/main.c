#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>

int main(void) {
  setvbuf(stdout, NULL, _IONBF, 0);
  setvbuf(stdin, NULL, _IONBF, 0);
  setvbuf(stderr, NULL, _IONBF, 0);

  printf("overflow me lol\n");

  void* wx = mmap(NULL, 1024, PROT_READ | PROT_WRITE | PROT_EXEC,
                  MAP_SHARED | MAP_ANONYMOUS, -1, 0);
  if (wx == MAP_FAILED) {
    printf("something has gone terribly wrong\n");
    exit(-1);
  }

  printf("> allocated a RWX memory page\n");
  printf("> write to the memory page:\n");
  printf(">> ");
  fgets(wx, 1024, stdin);
  printf("> jumping to the memory page\n");
  goto* wx;
}
