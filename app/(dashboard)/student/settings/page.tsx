'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Camera,
  Save,
  Trash2,
  Download,
  Upload,
  CheckCircle2,
  AlertCircle,
  Info,
  ExternalLink,
  LogOut,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Zap
} from 'lucide-react'

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<'profile' | 'account' | 'notifications' | 'privacy' | 'appearance' | 'billing'>('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [savedMessage, setSavedMessage] = useState(false)

  // Mock user data
  const [profileData, setProfileData] = useState({
    fullName: 'Alex Johnson',
    username: 'alex.johnson',
    email: 'alex.johnson@example.com',
    phone: '+92 300 1234567',
    bio: 'Passionate about innovation and technology. Learning new skills every day.',
    location: 'Karachi, Pakistan',
    website: 'alexjohnson.dev',
    github: 'alexjohnson',
    linkedin: 'alexjohnson'
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    challengeReminders: true,
    teamActivity: true,
    weeklyReport: true,
    newChallenges: false,
    achievements: true,
    leaderboardUpdates: false
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    showActivity: true,
    showAchievements: true,
    allowTeamInvites: true,
    dataSharingAnalytics: true
  })

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'dark',
    accentColor: 'violet',
    fontSize: 'medium',
    compactMode: false,
    animations: true
  })

  const sections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'billing', label: 'Billing', icon: CreditCard }
  ]

  const handleSave = () => {
    setSavedMessage(true)
    setTimeout(() => setSavedMessage(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-4xl font-bold heading-gradient">Settings</h1>
            <p className="text-white/80">Manage your account and preferences</p>
          </div>
        </div>
      </motion.div>

      {/* Save Success Message */}
      {savedMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-8 right-8 bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center gap-3 z-50"
        >
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-medium">Settings saved successfully!</span>
        </motion.div>
      )}

      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="col-span-1">
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4 sticky top-8">
            <div className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3 space-y-6">
          {/* Profile Section */}
          {activeSection === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Profile Picture */}
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Profile Picture</h3>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
                      AJ
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-violet-500 hover:bg-violet-600 rounded-full transition-all">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-300 mb-3">Upload a new profile picture or remove the current one</p>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg transition-all flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Upload Photo
                      </button>
                      <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg transition-all flex items-center gap-2">
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Full Name</label>
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Username</label>
                    <input
                      type="text"
                      value={profileData.username}
                      onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm text-slate-400 mb-2 block">Bio</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={3}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Location</label>
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Website</label>
                    <input
                      type="url"
                      value={profileData.website}
                      onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                      placeholder="yourwebsite.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Social Links</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">GitHub Username</label>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">github.com/</span>
                      <input
                        type="text"
                        value={profileData.github}
                        onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">LinkedIn Username</label>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">linkedin.com/in/</span>
                      <input
                        type="text"
                        value={profileData.linkedin}
                        onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={handleSave} className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </motion.div>
          )}

          {/* Account Section */}
          {activeSection === 'account' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Change Password */}
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 pr-12 text-white focus:outline-none focus:border-violet-500"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">New Password</label>
                    <input
                      type="password"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                </div>
                <button className="mt-4 px-6 py-3 bg-violet-500 hover:bg-violet-600 rounded-lg font-medium transition-all">
                  Update Password
                </button>
              </div>

              {/* Two-Factor Authentication */}
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Two-Factor Authentication</h3>
                    <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/30 rounded-full text-sm">
                    Disabled
                  </span>
                </div>
                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-all flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Enable 2FA
                </button>
              </div>

              {/* Connected Devices */}
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Connected Devices</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-violet-500/10 rounded-lg">
                        <Monitor className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <div className="font-medium">MacBook Pro</div>
                        <div className="text-sm text-slate-400">Chrome • Karachi, Pakistan</div>
                        <div className="text-xs text-green-400 mt-1">Current device</div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">Active now</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-slate-700 rounded-lg">
                        <Smartphone className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <div className="font-medium">iPhone 14</div>
                        <div className="text-sm text-slate-400">Safari • Karachi, Pakistan</div>
                      </div>
                    </div>
                    <button className="text-sm text-red-400 hover:text-red-300">Remove</button>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-red-500/5 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-red-400">Danger Zone</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Export Your Data</div>
                      <div className="text-sm text-slate-400">Download all your account data</div>
                    </div>
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  </div>
                  <div className="border-t border-red-500/20 pt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-red-400">Delete Account</div>
                        <div className="text-sm text-slate-400">Permanently delete your account and all data</div>
                      </div>
                      <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg transition-all flex items-center gap-2">
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive email updates about your account' },
                    { key: 'challengeReminders', label: 'Challenge Reminders', description: 'Get reminded about upcoming challenge deadlines' },
                    { key: 'weeklyReport', label: 'Weekly Progress Report', description: 'Receive a summary of your weekly activity' },
                    { key: 'newChallenges', label: 'New Challenges', description: 'Be notified when new challenges are available' }
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{setting.label}</div>
                        <div className="text-sm text-slate-400">{setting.description}</div>
                      </div>
                      <button
                        onClick={() => setNotificationSettings({
                          ...notificationSettings,
                          [setting.key]: !notificationSettings[setting.key as keyof typeof notificationSettings]
                        })}
                        className={`relative w-12 h-6 rounded-full transition-all ${
                          notificationSettings[setting.key as keyof typeof notificationSettings]
                            ? 'bg-violet-500'
                            : 'bg-slate-700'
                        }`}
                      >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          notificationSettings[setting.key as keyof typeof notificationSettings]
                            ? 'translate-x-6'
                            : ''
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Push Notifications</h3>
                <div className="space-y-4">
                  {[
                    { key: 'pushNotifications', label: 'Push Notifications', description: 'Receive push notifications on your devices' },
                    { key: 'teamActivity', label: 'Team Activity', description: 'Get notified about team member activities' },
                    { key: 'achievements', label: 'Achievements', description: 'Be notified when you unlock achievements' },
                    { key: 'leaderboardUpdates', label: 'Leaderboard Updates', description: 'Notifications about your rank changes' }
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{setting.label}</div>
                        <div className="text-sm text-slate-400">{setting.description}</div>
                      </div>
                      <button
                        onClick={() => setNotificationSettings({
                          ...notificationSettings,
                          [setting.key]: !notificationSettings[setting.key as keyof typeof notificationSettings]
                        })}
                        className={`relative w-12 h-6 rounded-full transition-all ${
                          notificationSettings[setting.key as keyof typeof notificationSettings]
                            ? 'bg-violet-500'
                            : 'bg-slate-700'
                        }`}
                      >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          notificationSettings[setting.key as keyof typeof notificationSettings]
                            ? 'translate-x-6'
                            : ''
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={handleSave} className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save Preferences
              </button>
            </motion.div>
          )}

          {/* Privacy Section */}
          {activeSection === 'privacy' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Profile Visibility</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg cursor-pointer hover:bg-slate-900 transition-all">
                    <input
                      type="radio"
                      name="visibility"
                      checked={privacySettings.profileVisibility === 'public'}
                      onChange={() => setPrivacySettings({...privacySettings, profileVisibility: 'public'})}
                      className="w-4 h-4 text-violet-500"
                    />
                    <div>
                      <div className="font-medium">Public</div>
                      <div className="text-sm text-slate-400">Anyone can see your profile</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg cursor-pointer hover:bg-slate-900 transition-all">
                    <input
                      type="radio"
                      name="visibility"
                      checked={privacySettings.profileVisibility === 'team'}
                      onChange={() => setPrivacySettings({...privacySettings, profileVisibility: 'team'})}
                      className="w-4 h-4 text-violet-500"
                    />
                    <div>
                      <div className="font-medium">Team Only</div>
                      <div className="text-sm text-slate-400">Only your team members can see your profile</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg cursor-pointer hover:bg-slate-900 transition-all">
                    <input
                      type="radio"
                      name="visibility"
                      checked={privacySettings.profileVisibility === 'private'}
                      onChange={() => setPrivacySettings({...privacySettings, profileVisibility: 'private'})}
                      className="w-4 h-4 text-violet-500"
                    />
                    <div>
                      <div className="font-medium">Private</div>
                      <div className="text-sm text-slate-400">Only you can see your profile</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  {[
                    { key: 'showEmail', label: 'Show Email Address', description: 'Display your email on your public profile' },
                    { key: 'showPhone', label: 'Show Phone Number', description: 'Display your phone number on your profile' },
                    { key: 'showActivity', label: 'Show Activity', description: 'Let others see your recent activity' },
                    { key: 'showAchievements', label: 'Show Achievements', description: 'Display your achievements publicly' },
                    { key: 'allowTeamInvites', label: 'Allow Team Invites', description: 'Let others invite you to their teams' },
                    { key: 'dataSharingAnalytics', label: 'Analytics & Insights', description: 'Help improve Largify with usage data' }
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{setting.label}</div>
                        <div className="text-sm text-slate-400">{setting.description}</div>
                      </div>
                      <button
                        onClick={() => setPrivacySettings({
                          ...privacySettings,
                          [setting.key]: !privacySettings[setting.key as keyof typeof privacySettings]
                        })}
                        className={`relative w-12 h-6 rounded-full transition-all ${
                          privacySettings[setting.key as keyof typeof privacySettings]
                            ? 'bg-violet-500'
                            : 'bg-slate-700'
                        }`}
                      >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          privacySettings[setting.key as keyof typeof privacySettings]
                            ? 'translate-x-6'
                            : ''
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={handleSave} className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save Privacy Settings
              </button>
            </motion.div>
          )}

          {/* Appearance Section */}
          {activeSection === 'appearance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Theme</h3>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setAppearanceSettings({...appearanceSettings, theme: 'dark'})}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      appearanceSettings.theme === 'dark'
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-slate-700 bg-slate-900/50'
                    }`}
                  >
                    <Moon className="w-6 h-6 mb-2 mx-auto" />
                    <div className="font-medium">Dark</div>
                  </button>
                  <button
                    onClick={() => setAppearanceSettings({...appearanceSettings, theme: 'light'})}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      appearanceSettings.theme === 'light'
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-slate-700 bg-slate-900/50'
                    }`}
                  >
                    <Sun className="w-6 h-6 mb-2 mx-auto" />
                    <div className="font-medium">Light</div>
                  </button>
                  <button
                    onClick={() => setAppearanceSettings({...appearanceSettings, theme: 'auto'})}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      appearanceSettings.theme === 'auto'
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-slate-700 bg-slate-900/50'
                    }`}
                  >
                    <Monitor className="w-6 h-6 mb-2 mx-auto" />
                    <div className="font-medium">Auto</div>
                  </button>
                </div>
              </div>

              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Accent Color</h3>
                <div className="grid grid-cols-6 gap-3">
                  {[
                    { name: 'violet', color: 'bg-violet-500' },
                    { name: 'blue', color: 'bg-blue-500' },
                    { name: 'green', color: 'bg-green-500' },
                    { name: 'red', color: 'bg-red-500' },
                    { name: 'orange', color: 'bg-orange-500' },
                    { name: 'pink', color: 'bg-pink-500' }
                  ].map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setAppearanceSettings({...appearanceSettings, accentColor: color.name})}
                      className={`h-12 rounded-lg ${color.color} ${
                        appearanceSettings.accentColor === color.name
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-[#111927]'
                          : ''
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Display Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 mb-3 block">Font Size</label>
                    <div className="flex gap-2">
                      {['small', 'medium', 'large'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setAppearanceSettings({...appearanceSettings, fontSize: size})}
                          className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                            appearanceSettings.fontSize === size
                              ? 'bg-violet-500 text-white'
                              : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                          }`}
                        >
                          {size.charAt(0).toUpperCase() + size.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Compact Mode</div>
                      <div className="text-sm text-slate-400">Reduce spacing for a denser layout</div>
                    </div>
                    <button
                      onClick={() => setAppearanceSettings({
                        ...appearanceSettings,
                        compactMode: !appearanceSettings.compactMode
                      })}
                      className={`relative w-12 h-6 rounded-full transition-all ${
                        appearanceSettings.compactMode ? 'bg-violet-500' : 'bg-slate-700'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        appearanceSettings.compactMode ? 'translate-x-6' : ''
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Animations</div>
                      <div className="text-sm text-slate-400">Enable smooth transitions and animations</div>
                    </div>
                    <button
                      onClick={() => setAppearanceSettings({
                        ...appearanceSettings,
                        animations: !appearanceSettings.animations
                      })}
                      className={`relative w-12 h-6 rounded-full transition-all ${
                        appearanceSettings.animations ? 'bg-violet-500' : 'bg-slate-700'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        appearanceSettings.animations ? 'translate-x-6' : ''
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

              <button onClick={handleSave} className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save Appearance
              </button>
            </motion.div>
          )}

          {/* Billing Section */}
          {activeSection === 'billing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Current Plan */}
              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
                    <p className="text-slate-400">Perfect for getting started</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">$0</div>
                    <div className="text-slate-400 text-sm">/month</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Access to all challenges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Team collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Progress tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Community support</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Upgrade to Pro
                </button>
              </div>

              {/* Payment Method */}
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Payment Method</h3>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-4">
                  <p className="text-slate-400 text-center py-8">No payment method added</p>
                </div>
                <button className="w-full px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Add Payment Method
                </button>
              </div>

              {/* Billing History */}
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Billing History</h3>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-slate-400 text-center py-8">No billing history</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
