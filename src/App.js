import HomePage from "./components/Home/HomePage";
import Favourite from "./components/favourite/Favourite";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import NewsCategory from "./components/NewsCategory/NewsCategory";
import ProtectedRoute from "./components/Auth/ProtectedRoute/ProtectedRoute";
import Blog from "./components/Dashboard/blog/Blog";
import Admin from "./components/Dashboard/admin/Admin";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/signin" element={<Signin />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/" element={<HomePage />} />
				<Route element={<ProtectedRoute />}>
					<Route exact path="/favourite" element={<Favourite />} />
				</Route>
				<Route exact path="/blog/:id" element={<NewsDetail />} />
				<Route exact path="/blogs/:category" element={<NewsCategory />} />
				<Route element={<ProtectedRoute />}>
					<Route exact path="/dashboard" element={<Dashboard />}>
						<Route exact path="/dashboard/" element={<Blog />} />
						<Route exact path="/dashboard/admin" element={<Admin />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
