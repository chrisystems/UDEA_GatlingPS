# gen_feeder.py
# Ejecutar: python gen_feeder.py
import csv
import random
from pathlib import Path

# ---------- PARÁMETROS  ----------
OUT_PATH = Path("src/test/resources/transfer_feeder.csv")
NUM_ROWS = 5000                # filas totales a generar 
NUM_FROM_ACCOUNTS = 500       # número distinto de cuentas origen
NUM_TO_ACCOUNTS = 2000        # número distinto de cuentas destino
AMOUNT_MIN = 1.00
AMOUNT_MAX = 500.00
# ------------------------------------------------

def gen_account_ids(prefix, count, start=10000):
    return [str(start + i) for i in range(count)]

from_accounts = gen_account_ids("F", NUM_FROM_ACCOUNTS, start=10000)
to_accounts   = gen_account_ids("T", NUM_TO_ACCOUNTS, start=20000)

OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
with OUT_PATH.open("w", newline="", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["fromAccountId", "toAccountId", "amount"])
    for i in range(NUM_ROWS):
        # elige from y to distintos
        from_acc = random.choice(from_accounts)
        to_acc = random.choice(to_accounts)
        # evitar same account by chance if they overlap
        while to_acc == from_acc:
            to_acc = random.choice(to_accounts)
        # monto aleatorio con 2 decimales
        amount = round(random.uniform(AMOUNT_MIN, AMOUNT_MAX), 2)
        writer.writerow([from_acc, to_acc, amount])

print(f"Feeder generado: {OUT_PATH} -> {NUM_ROWS} filas")