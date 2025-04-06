// asyncHandler.js

// A generic async handler that catches errors and passes them to next()
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;

// A slightly different version that handles errors and sends a response directly
export const asyncHandlerWithResponse = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (err) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message || 'Internal Server Error',
           
        });
    }
};
