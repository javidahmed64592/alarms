import time
import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from utils.timer_utils import parse_seconds_to_hhmmss


class Timer:
    def __init__(self, label: str, set_time: int):
        self.label = label
        self.set_time = set_time
        self.remaining_time = set_time

    def countdown(self):
        self.remaining_time = self.set_time

        while self.remaining_time > 0:
            self.print_remaining_time()
            self.remaining_time -= 1
            time.sleep(1)

        self.print_remaining_time()

    def print_remaining_time(self):
        print(
            f"{self.label}: {parse_seconds_to_hhmmss(self.remaining_time)} {'' if self.remaining_time > 0 else ' Done!'}"
        )


if __name__ == "__main__":
    timer1 = Timer("My time", 5)
    timer1.countdown()
