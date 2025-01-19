FROM python:3.11-alpine

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache gcc musl-dev linux-headers

# Copy and install requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY src/ ./src/

# Set Python path
ENV PYTHONPATH=/app/src

# Create storage directory
RUN mkdir -p /app/storage/markdown

CMD ["python", "-m", "fast_markdown_mcp.server", "/app/storage/markdown"] 