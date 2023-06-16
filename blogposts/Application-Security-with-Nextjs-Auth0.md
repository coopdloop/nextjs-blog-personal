---
title: 'Securing Application Endpoints with Next.js and Auth0'
date: '2023-05-21'
---

# Securing Application Endpoints with Next.js and Auth0

In this blog post, we will explore how to utilize Next.js with Auth0 to secure application endpoints behind user authentication. We will also discuss the OAuth and Auth0 login flow for creating users and differentiate between admin-level and normal-level users. Additionally, we will highlight the fact that the application limits content based off user context and how certain endpoints, such as `/admin`, are inaccessible to normal users, but accessible to administrator users. The roles for admin and normal users will be defined in a PostgreSQL database on the backend.

**Application**: https://github.com/coopdloop/my_crud-dyi_app

**demo**: https://pages.github.com/coopdloop/my_crud-dyi_app

## Introduction

Securing application endpoints is crucial for protecting sensitive data and ensuring the integrity of your system. Next.js, a popular React framework, offers seamless integration with Auth0, an authentication and authorization platform, to implement user authentication and role-based access control (RBAC) effectively.

## Setting up Next.js with Auth0

1. Begin by installing the necessary dependencies:
   