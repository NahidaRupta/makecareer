#!/usr/bin/env bash
set -euo pipefail

echo "==> Setting up PostgreSQL for MakeCareer..."

# Create role if it doesn't exist
sudo -u postgres psql -tc "SELECT 1 FROM pg_roles WHERE rolname='rupta'" | grep -q 1 || \
  sudo -u postgres psql -c "CREATE USER rupta WITH SUPERUSER PASSWORD 'postgres';"

# Create database if it doesn't exist
sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname='makecareer_dev'" | grep -q 1 || \
  sudo -u postgres psql -c "CREATE DATABASE makecareer_dev OWNER rupta;"

echo "==> PostgreSQL setup complete."

# Verify connection
PGPASSWORD=postgres psql -h 127.0.0.1 -U rupta -d makecareer_dev -c "SELECT version();" && \
  echo "==> Connection verified OK."
