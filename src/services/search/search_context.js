"use strict";

class SearchContext {
    constructor(params = {}) {
        this.fastSearch = !!params.fastSearch;
        this.ancestorNoteId = params.ancestorNoteId;
        this.includeArchivedNotes = !!params.includeArchivedNotes;
        this.orderBy = params.orderBy;
        this.orderDirection = params.orderDirection;
        this.fuzzyAttributeSearch = !!params.fuzzyAttributeSearch;
        this.highlightedTokens = [];
        this.originalQuery = "";
        this.error = null;
    }

    addError(error) {
        // we record only the first error, subsequent ones are usually consequence of the first
        if (!this.error) {
            this.error = error;
        }
    }

    hasError() {
        return !!this.error;
    }

    getError() {
        return this.error;
    }
}

module.exports = SearchContext;
