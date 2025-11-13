import os
from dotenv import load_dotenv

load_dotenv('../.env')

class TextChunker:
    def __init__(self):
        """Initialize with chunk settings from environment"""
        self.chunk_size = int(os.getenv('CHUNK_SIZE', 500))
        self.chunk_overlap = int(os.getenv('CHUNK_OVERLAP', 50))
        print(f"Chunker initialized (size={self.chunk_size}, overlap={self.chunk_overlap})")
    
    def chunk_pages(self, pages):
        """
        Split pages into chunks with overlap
        """
        chunks = []
        global_index = 0
        
        for page_num, text in pages:
            # Split by words
            words = text.split()
            
            # Create overlapping chunks
            i = 0
            while i < len(words):
                # Get chunk of words
                chunk_words = words[i:i + self.chunk_size]
                chunk_text = ' '.join(chunk_words)
                
                chunks.append({
                    'content': chunk_text,
                    'page_number': page_num,
                    'chunk_index': global_index
                })
                
                global_index += 1
                
                # Move forward by (chunk_size - overlap)
                i += (self.chunk_size - self.chunk_overlap)
                
                # Break if we've processed all words
                if i >= len(words):
                    break
        
        print(f"Created {len(chunks)} chunks")
        return chunks