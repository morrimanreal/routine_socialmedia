import { Routes, Route } from 'react-router-dom';

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { AllUsers, CheckList, CreateTodoList, Explore, Home, LikedPosts, MyCalendar, PostDetails, Profile, UpdateProfile } from './_root/pages';
import './globals.css';

import { Toaster } from "@/components/ui/toaster"



const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes*/}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        {/* private routes*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/create-todo-list' element={<CreateTodoList />} />
          <Route path='/calendar' element={<MyCalendar />} />
          <Route path='/check-list/:id' element={<CheckList />} />

          <Route path='/profile/:id/*' element={<Profile />} />
          <Route path='/all-users' element={<AllUsers />} />

          <Route path='/explore' element={<Explore />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/update-profile/:id' element={<UpdateProfile />} />
          <Route path='/liked-posts' element={<LikedPosts />} />

        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App
