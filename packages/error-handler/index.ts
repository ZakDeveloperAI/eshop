export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly details?: any;

    constructor(message: string, statusCode: number, isOperational = true, details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        Error.captureStackTrace(this)
    }
}

//Not found error
export class NotFoundError extends AppError {
    constructor(message: string = 'Resource not found') {
        super(message, 404);
    }
}

//validation error (use for zod validation)
export class ValidationError extends AppError {
    constructor(message: string = 'Invalid request data', details?: any) {
        super(message, 400, true, details);
    }
}

//authentication error
export class AuthenticationError extends AppError {
    constructor(message: string = 'Authentication failed') {
        super(message, 401);
    }
}

//forbidden error
export class ForbiddenError extends AppError {
    constructor(message: string = 'Access forbidden') {
        super(message, 403);
    }
}

//database error
export class DatabaseError extends AppError {
    constructor(message: string = 'Database error', details?: any) {
        super(message, 500, true, details);
    }
}

//rate limit error
export class RateLimitError extends AppError {
    constructor(message: string = 'Too many requests, please try again later') {
        super(message, 429);
    }
}