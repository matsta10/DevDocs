FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    chromium \
    chromium-driver \
    fonts-freefont-ttf \
    nodejs \
    npm \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables for Playwright
ENV PYTHONUNBUFFERED=1 \
    PLAYWRIGHT_BROWSERS_PATH=/usr/bin/chromium \
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# Upgrade pip
RUN pip install --no-cache-dir --upgrade pip

# Copy requirements first
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create necessary directories
RUN mkdir -p /app/data /app/logs

EXPOSE 24125

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "24125"] 