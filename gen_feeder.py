# gen_feeder_valid.py
# Ejecutar: python gen_feeder_valid.py

import csv
import random
from pathlib import Path

# ---------- PARÁMETROS ----------
OUT_PATH = Path("src/test/resources/transfer_feeder.csv")
NUM_ROWS = 5000 # filas totales a generar 
VALID_FROM_ACCOUNTS = ["13344","13677","14121","14232","14454"] # cuenta origen válida
VALID_TO_ACCOUNTS = ["14565","14676", "14787", "14898", "15009"] # destinos válidos
AMOUNT_MIN = 10.00
AMOUNT_MAX = 20.00
# --------------------------------

OUT_PATH.parent.mkdir(parents=True, exist_ok=True)

with OUT_PATH.open("w", newline="", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["fromAccountId", "toAccountId", "amount"])
    
    for i in range(NUM_ROWS):
        from_acc = random.choice(VALID_FROM_ACCOUNTS)
        to_acc = random.choice(VALID_TO_ACCOUNTS)
        # monto aleatorio entre 10 y 200, con 2 decimales
        amount = round(random.uniform(AMOUNT_MIN, AMOUNT_MAX), 2)
        writer.writerow([from_acc, to_acc, amount])

print(f"Feeder generado con cuentas válidas: {OUT_PATH} ({NUM_ROWS} filas)")
