import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "lax", // Changed from strict to lax to allow cross-site cookie
		secure: false, // Set to false for development and Docker
		path: "/",
		domain: process.env.NODE_ENV === "production" ? process.env.DOMAIN : undefined
	});
};

export default generateTokenAndSetCookie;
