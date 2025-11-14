package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/jonkermoo/rag-textbook/backend/internal/middleware"
	"github.com/jonkermoo/rag-textbook/backend/internal/models"
	"github.com/jonkermoo/rag-textbook/backend/internal/services"
)

type QueryHandler struct {
	ragService *services.RAGService
}

// Create a new query handler
func NewQueryHandler(ragService *services.RAGService) *QueryHandler {
	return &QueryHandler{
		ragService: ragService,
	}
}

// Process RAG query request
func (h *QueryHandler) HandleQuery(w http.ResponseWriter, r *http.Request) {
	// Only accept POST request
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Get user ID from context (added by auth middleware)
	userID, ok := middleware.GetUserID(r)
	if !ok {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	// Parse request body
	var req models.QueryRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Validate request
	if req.Question == "" {
		http.Error(w, "Question is required", http.StatusBadRequest)
		return
	}
	if req.TextbookID == 0 {
		http.Error(w, "Textbook ID is required", http.StatusBadRequest)
		return
	}

	// Process query
	log.Printf("Processing query: %s (textbook_id=%d)", req.Question, req.TextbookID)

	resp, err := h.ragService.Query(req, userID)
	if err != nil {
		log.Printf("Query error: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Return response
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)

	log.Printf("Query completed in %.2fms", resp.TimeTaken)
}

// Health check endpoint
func HandleHealth(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("OK"))
}
