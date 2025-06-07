# TikTok Cloud Storage with Supabase

## Overview

This project upgrades the TikTok clone to use **Supabase Cloud Storage** instead of local file storage. It improves scalability, reliability, and performance by uploading and serving videos and thumbnails via a global CDN using Supabase buckets.

---

## Why Supabase Storage?

* **Scalability:** Handles growing data without infrastructure limits
* **Reliability:** Redundant storage prevents data loss
* **Performance:** CDN-delivered content loads faster globally
* **Security:** Granular access policies for files
* **Cost-effective:** Pay-as-you-go model

---

## Supabase Storage Workflow

1. Frontend uploads video directly to Supabase
2. Supabase handles storage and access
3. Metadata (URLs, storage path) is stored in PostgreSQL via Prisma
4. Video is served directly from CDN URL

---

## Setup Instructions

### 1. Create a Supabase Project

* Go to [https://supabase.com](https://supabase.com)
* Create a new project and set a strong password

### 2. Create Buckets

* Navigate to **Storage**
* Create two buckets: `videos` and `thumbnails`
* Set access to **Public**

### 3. Set Bucket Policies

* Allow authenticated users to upload
* Allow public access to view videos and thumbnails

---

## Backend Integration

### Step 1: Install Supabase Client

```bash
cd server
npm install @supabase/supabase-js
```

### Step 2: Create Client Config

```js
// src/lib/supabase.js
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
module.exports = supabase;
```

### Step 3: Update .env

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
SUPABASE_STORAGE_URL=https://your-project.supabase.co/storage/v1
```

### Step 4: Create Upload Service

* Create `src/services/storageService.js`
* Add upload, delete, and access functions for Supabase

### Step 5: Update Video Controller

* Use Supabase upload/delete logic in `createVideo`, `deleteVideo`

### Step 6: Update Prisma Schema

Add storage path fields to `Video` model:

```prisma
videoStoragePath String?  @map("video_storage_path")
thumbnailStoragePath String?  @map("thumbnail_storage_path")
```

### Step 7: Migrate Existing Files (Optional)

```bash
node scripts/migrateVideosToSupabase.js
```

---

## Frontend Integration

### Step 1: Install Supabase

```bash
cd tiktok_frontend
npm install @supabase/supabase-js
```

### Step 2: Create Client Config

```js
// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY);
export default supabase;
```

### Step 3: .env.local

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=your-public-key
```

### Step 4: Update Upload Service

* Use Supabase API to upload directly from browser

### Step 5: Update Upload and VideoCard Components

* Update preview display and video URL logic to use Supabase URLs

---

## Deployment & Clean-Up

1. Run migration script if needed
2. Verify files load from Supabase
3. Back up and remove local file storage logic

---

## Resources

* [Supabase Storage Guide](https://supabase.com/docs/guides/storage)
* [Supabase JS Reference](https://supabase.com/docs/reference/javascript/introduction)
* [Secure File Upload](https://web.dev/articles/secure-file-upload)
* [What is a CDN?](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
