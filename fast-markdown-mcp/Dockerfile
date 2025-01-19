FROM python:3.11-alpine

WORKDIR /app

# Copy setup files
COPY setup.py .
COPY src/ ./src/

# Install dependencies and package
RUN pip install --no-cache-dir -e .

# Create storage directory
RUN mkdir -p /app/storage/markdown

CMD ["python", "-m", "fast_markdown_mcp.server", "/app/storage/markdown"] 