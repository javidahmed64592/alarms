import time


class Alarm:
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

        return "Done!"

    def print_remaining_time(self):
        print(
            f"{self.label}: ",
            Alarm.parse_seconds_to_hhmmss(self.remaining_time)
        )

    @staticmethod
    def parse_seconds_to_hhmmss(secs):
        hours, secs = div_and_remainder(secs, 3600)
        mins, secs = div_and_remainder(secs, 60)
        return f"{format_num(hours, 2)}h {format_num(mins, 2)}m {format_num(secs, 2)}s"


def div_and_remainder(num, divide_by):
    return num // divide_by, num % divide_by


def format_num(num, len):
    return str(num).zfill(len)


if __name__ == "__main__":
    alarm1 = Alarm("My time", 5)
    alarm1.countdown()
