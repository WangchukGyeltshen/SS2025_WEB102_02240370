# Reflection.md

## a) Documentation

In this practical, I upgraded the file upload system in the TikTok clone project by integrating **Supabase Cloud Storage**. Instead of storing videos and thumbnails locally on the server, files are now stored securely and reliably in Supabase buckets. The main concepts and tools I applied include:

- **Supabase Storage**: Used Supabase’s cloud storage buckets for scalable file hosting and access control.
- **Client SDK Integration**: Installed and configured the Supabase JavaScript client in both the backend and frontend applications.
- **Environment Configuration**: Added `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, and `SUPABASE_PUBLIC_KEY` in the `.env` files to securely access Supabase services.
- **Cloud Upload Logic**: Updated the upload service and video controller logic to handle uploads directly to Supabase and store metadata such as `videoStoragePath` and `thumbnailStoragePath`.
- **Prisma Schema Update**: Modified the `Video` model in the Prisma schema to include new fields for cloud storage paths.
- **Migration Script**: Created and executed a script to migrate previously stored local videos to Supabase.
- **Frontend Integration**: Updated the upload form and video card components in the Next.js frontend to handle Supabase URLs and enable direct uploads.

## b) Reflection

This practical taught me how to move beyond local file storage and implement a real-world, scalable file handling system. Working with Supabase made me realize how cloud storage services can improve performance, security, and maintainability in production environments.

### What I Learned
- How to configure and use Supabase buckets for public and private file storage.
- Managing file uploads from the frontend to the cloud without routing through the backend.
- Setting up storage access policies using Supabase’s dashboard.
- Updating backend logic to store and serve files through signed cloud URLs.
- Writing Prisma migration scripts to support new data structures.
- Migrating existing assets from local directories to cloud storage in a structured way.

### Challenges Faced

Initially, I faced difficulties with authentication and Supabase key configuration. I was mistakenly using the wrong API key (anon key instead of service_role key) in the backend, which led to permission errors when trying to upload files. Once I double-checked the API credentials and access policies in Supabase, the issue was resolved.

Another challenge was handling the asynchronous nature of file uploads and updates to the database. I had to make sure that the file was uploaded successfully before saving its metadata to the database, which required restructuring part of the upload logic.

---

Overall, this practical helped me understand modern, scalable file storage solutions and how to integrate them seamlessly into a full-stack web application. It was a significant step in making the project more production-ready and aligned with best practices in web development.
