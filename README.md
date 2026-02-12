# Go Marine -- 6 Week Development Plan

**Tech Stack:** React Native (Expo), Next.js, NestJS, Supabase
(Postgres), Prisma, JWT Authentication

------------------------------------------------------------------------

## Overview

This document outlines the 6-week Agile sprint plan for developing the
Go Marine platform.

System Components: - 📱 Mobile Application (React Native -- Volunteers &
Partners) - 🖥 Admin Web Dashboard (Next.js -- Admin & Super Admin) - ⚙
Backend API (NestJS -- JWT secured) - 🗄 Database (Supabase Postgres via
Prisma ORM)

------------------------------------------------------------------------

# Week 1 -- Infrastructure & JWT Authentication

## Backend (NestJS)

-   Setup project structure
-   Configure Prisma with Supabase Postgres
-   Implement AuthModule, UsersModule, RolesModule
-   JWT Register/Login/Refresh
-   JwtAuthGuard + RolesGuard
-   Seed default roles + admin account

## Mobile (React Native)

-   Login/Register screens
-   SecureStore token storage
-   Role-based routing
-   Logout functionality

## Admin (Next.js)

-   Login page
-   Protected admin layout

### Milestone

-   Secure login working
-   JWT enforced on protected routes

------------------------------------------------------------------------

# Week 2 -- Event Management Core

## Backend

-   Events CRUD (Partner only)
-   Event registration endpoints
-   Ownership validation

## Database

-   events
-   event_registrations

## Mobile

-   Event listing
-   Event details
-   Join event
-   My events screen

### Milestone

-   Partner creates event
-   User registers successfully

------------------------------------------------------------------------

# Week 3 -- QR Check-in & Attendance

## Backend

-   AttendanceModule
-   Duplicate check prevention
-   Unique constraint on eventId + registrationId

## Mobile

-   QR generator (user)
-   QR scanner (partner)
-   Manual fallback entry

## Offline

-   Store pending check-ins locally
-   Sync when online

### Milestone

-   QR check-in functional
-   Duplicate scans prevented

------------------------------------------------------------------------

# Week 4 -- Gamification System

## Backend

-   Points ledger
-   Leaderboard endpoint
-   Achievement evaluator

## Mobile

-   Leaderboard screen
-   Achievements screen
-   Points display in profile

### Milestone

-   Attendance grants points
-   Leaderboard ranks correctly

------------------------------------------------------------------------

# Week 5 -- Partner Requests & Admin Governance

## Backend

-   Partner request submission
-   Admin approval/rejection
-   Role upgrade logic
-   Reports export (CSV)

## Admin Dashboard

-   Manage users
-   Manage partners
-   Moderate events
-   Export attendance reports

### Milestone

-   Partner approval flow complete
-   Admin reporting functional

------------------------------------------------------------------------

# Week 6 -- Offline Sync, Hardening & Final Testing

## Mobile

-   Complete offline queue
-   Background sync service
-   Conflict handling

## Backend

-   Idempotent check-in endpoint
-   DTO validation
-   Rate limiting
-   Audit logging

## Documentation

-   Setup guide
-   Environment variables
-   Database schema notes
-   Demo flow

### Milestone

-   Offline sync stable
-   System demo-ready
-   Documentation complete

------------------------------------------------------------------------

# Sprint Tags

v0.1-sprint1\
v0.2-sprint2\
v0.3-sprint3\
v0.4-sprint4\
v0.5-sprint5\
v1.0-capstone-release
