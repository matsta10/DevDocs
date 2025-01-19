FROM python:3.11-alpine

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache gcc musl-dev linux-headers

# Copy setup files first
COPY setup.py .
COPY src/ ./src/

# Install the package in editable mode
RUN pip install -e .

# Create storage directory
RUN mkdir -p /app/storage/markdown

CMD ["python", "-m", "fast_markdown_mcp.server", "/app/storage/markdown"] 