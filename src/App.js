import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/layout/Layout";
import SinglePostPage from "./pages/PostsPage/singlePostPage/SinglePostPage";
import SingleUserPage from "./pages/UsersPage/singleUserPage/SingleUserPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import SingleUserPostsPage from "./pages/UsersPage/singleUserPostsPage/SingleUserPostsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'}element={<UsersPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={':posts'} element={<SingleUserPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>


                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={':comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </div>


    );
}

export default App;
