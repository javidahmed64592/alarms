def div_and_remainder(num, divide_by):
    return num // divide_by, num % divide_by


def format_num(num, len):
    return str(num).zfill(len)


def parse_seconds_to_hhmmss(secs):
    hours, secs = div_and_remainder(secs, 3600)
    mins, secs = div_and_remainder(secs, 60)
    return f"{format_num(hours, 2)}h {format_num(mins, 2)}m {format_num(secs, 2)}s"
