import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/userValidation/privateRoute'

// PageRoutes
import { Home } from './components/public/landingpage'
import { Shop } from './components/public/shop'
import { Basket } from './components/public/basket'
import { Register } from './components/userValidation/register/register'

// User
import { Dashboard } from './components/user/dashboard'
import { Profile } from './components/user/profile'
import { Wishlist } from './components/user/wishlist'
import { Invoices } from './components/user/invoices'


// Support
import { DashboardSupport } from './components/manager/support/dashboard'
import { Chat } from './components/manager/support/chat'
import { Tickets } from './components/manager/support/tickets'
import { CreateTask } from './components/manager/support/create-task'

// Admin
import { DashboardAdmin } from './components/manager/admin/dashboard'
import { ArticleManagement } from './components/manager/admin/article-management'
import { Tasks } from './components/manager/admin/tasks'
import { ValidationModal } from './components/userValidation/validationModal'

export const backendURL = 'http://localhost:5500'

function App() {
    return (
        <main className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/vali" element={<ValidationModal />} />

                {/* PROTECTED ROUTES - /user */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/wishlist"
                    element={
                        <PrivateRoute>
                            <Wishlist />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/invoices"
                    element={
                        <PrivateRoute>
                            <Invoices />
                        </PrivateRoute>
                    }
                />

                {/* PROTECTED ROUTES - /manger/support */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardSupport />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/tickets"
                    element={
                        <PrivateRoute>
                            <Tickets />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/chat"
                    element={
                        <PrivateRoute>
                            <Chat />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/create-task"
                    element={
                        <PrivateRoute>
                            <CreateTask />
                        </PrivateRoute>
                    }
                />

                {/* PROTECTED ROUTES - /manger/admin */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardAdmin />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/article-management"
                    element={
                        <PrivateRoute>
                            <ArticleManagement />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/tasks"
                    element={
                        <PrivateRoute>TEST
                            <Tasks />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </main>
    )
}

export default App