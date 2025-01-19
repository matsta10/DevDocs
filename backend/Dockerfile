FROM python:3.11-alpine

WORKDIR /app

# Install system dependencies including browsers
RUN apk add --no-cache \
    gcc \
    musl-dev \
    linux-headers \
    chromium \
    chromium-chromedriver \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nodejs \
    npm \
    git

# Set environment variables for Playwright
ENV PYTHONUNBUFFERED=1 \
    PLAYWRIGHT_BROWSERS_PATH=/usr/lib/chromium \
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