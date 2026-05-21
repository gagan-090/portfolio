import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const categories = [
  { name: 'Architecture', slug: 'architecture', description: 'System design and modern architecture' },
  { name: 'Database Optimization', slug: 'database-optimization', description: 'Postgres and DB scaling' },
  { name: 'Cybersecurity', slug: 'cybersecurity', description: 'Application and API security' },
  { name: 'Frontend Architecture', slug: 'frontend-architecture', description: 'React, state, and UI' },
  { name: 'Web Performance', slug: 'web-performance', description: 'Core web vitals and speed' },
];

const author = {
  full_name: 'Gagan Shukla',
  bio: 'Full Stack Mobile App Developer specializing in Flutter, React Native, and cross-platform application development.',
  avatar_url: '/assets/nano_banana_dev.png',
  twitter_handle: 'gaganshukla',
  github_handle: 'gagan-090'
};

const blogs = [
  {
    title: 'Edge Computing in 2026: Architecting Modern Web Applications',
    slug: 'evolution-of-edge-computing-modern-web',
    category_slug: 'architecture',
    excerpt: 'Discover how edge computing is revolutionizing web performance, reducing latency, and shaping the future of global application architecture.',
    reading_time_minutes: 8,
    is_featured: true,
    cover_image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    content: `The demand for instantaneous digital experiences has never been higher. As applications grow in complexity, the traditional centralized server model is no longer sufficient for delivering the sub-second latency required by modern enterprises. 

Welcome to the era of **Edge Computing**—a fundamental shift in how we process data, execute code, and deliver experiences to users worldwide.

## The Problem with Centralized Compute

For the last decade, the standard architecture for deploying a web application involved spinning up instances in a centralized cloud region (e.g., \`us-east-1\`). While this model is highly scalable, it introduces an unavoidable bottleneck: the speed of light.

If your primary database and servers are in Virginia, a user accessing your application from Tokyo must wait for their request to traverse the Pacific Ocean, hit the server, query the database, and travel all the way back. This round-trip time (RTT) inherently degrades the user experience, regardless of how optimized your backend code is.

> [!WARNING]
> High latency directly impacts business metrics. Amazon famously found that every 100ms of latency cost them 1% in sales. In 2026, user expectations are even less forgiving.

## Enter the Edge

Edge computing fundamentally inverts this model. Instead of forcing the user's request to travel to the compute layer, we distribute the compute layer globally, bringing it directly to the user.

By leveraging globally distributed Content Delivery Networks (CDNs) not just for static assets (images, CSS, JS), but for **executable code**, we can execute business logic within milliseconds of the user's physical location.

### How Edge Functions Work

Edge Functions are serverless compute instances that run on V8 isolates rather than traditional Node.js containers. This architectural difference is critical:

1. **Zero Cold Starts:** Because they run on isolates, Edge Functions spin up in less than 50 milliseconds.
2. **Global Distribution:** When you deploy an Edge Function, it is instantly replicated to hundreds of nodes worldwide.
3. **Ultra-Low Latency:** A user in Tokyo hits the Tokyo node; a user in London hits the London node.

Here is an example of a modern Edge Function intercepting a request to personalize content based on the user's geographic location:

\`\`\`typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const city = request.geo?.city || 'Unknown';

  // Rewrite the response to serve localized content instantly
  request.nextUrl.pathname = \`/localized/\${country.toLowerCase()}\`;
  
  const response = NextResponse.rewrite(request.nextUrl);
  response.headers.set('X-User-Location', \`\${city}, \${country}\`);
  
  return response;
}

export const config = {
  matcher: '/marketing/:path*',
};
\`\`\`

## Data at the Edge: The Next Frontier

While executing compute at the edge is powerful, it creates a new challenge: **Data Gravity**. 

If your Edge Function executes in Paris but still has to query a PostgreSQL database in Virginia, you've negated the latency benefits. The solution lies in distributed databases and edge-caching strategies.

### Modern Solutions for Edge Data
- **Distributed SQL:** Databases like CockroachDB and Supabase (via read replicas) distribute data globally, allowing local edge nodes to query local database replicas.
- **Global Key-Value Stores:** Using Redis at the edge (e.g., Upstash) allows for single-digit millisecond data retrieval for session states, feature flags, and rate limiting.

## Implementing Edge Architecture

Transitioning to an edge-first architecture requires a paradigm shift in how we write code.

1. **Decouple Heavy Compute:** Edge functions have strict execution time limits. Offload heavy data processing to background workers, and use the edge for routing, personalization, and lightweight API responses.
2. **Embrace Eventual Consistency:** Global data replication takes time. Design your UI to handle optimistic updates and eventual consistency gracefully.
3. **Validate at the Edge:** Security protocols, JWT validation, and bot-protection should happen at the edge. There is no reason malicious traffic should ever reach your primary database.

\`\`\`typescript
import { jwtVerify } from 'jose';

export async function verifyAuthAtEdge(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload; // Validated in milliseconds, locally
  } catch (error) {
    throw new Error('Unauthorized Access Blocked at Edge');
  }
}
\`\`\`

## The Future is Distributed

As we continue to build for a global audience, treating the network as a central bottleneck is an outdated approach. Edge computing is no longer an experimental feature reserved for enterprise giants—it is the baseline for modern, competitive web development.

By adopting edge architectures, we don't just optimize load times; we fundamentally upgrade the resilience, scalability, and security of our digital products.

***

### Frequently Asked Questions

**What is the difference between Edge Functions and Serverless Functions?**
Serverless functions (like AWS Lambda) run in isolated containers, usually in a specific region, and suffer from cold starts. Edge Functions run on V8 isolates distributed globally on CDN nodes, offering near-zero cold starts and localized execution.

**Can I run standard Node.js libraries on the Edge?**
Not always. Because Edge Functions use V8 isolates (like the browser), they lack full access to standard Node.js APIs (like \`fs\` or \`child_process\`). You must use Edge-compatible libraries.

**Is Edge Computing expensive?**
While compute costs per invocation are generally lower than traditional serverless, bandwidth costs can scale rapidly. It is highly cost-effective for caching, routing, and auth, but heavy compute should remain centralized.`
  },
  {
    title: 'Optimizing PostgreSQL: Advanced Indexing & Query Tuning Strategies',
    slug: 'advanced-postgresql-optimization-high-scale',
    category_slug: 'database-optimization',
    excerpt: 'An elite engineering guide to scaling PostgreSQL databases. Learn advanced indexing, query tuning, EXPLAIN ANALYZE, and connection pooling for high-traffic apps.',
    reading_time_minutes: 11,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    content: `PostgreSQL is widely considered the world's most advanced open-source relational database. Out of the box, it handles moderate traffic with remarkable stability. However, when your application scales to millions of rows and thousands of concurrent transactions, relying on default configurations is a recipe for disaster.

Database optimization is not just about blindly adding indexes to slow queries. It requires a deep, scientific understanding of how Postgres executes queries, manages memory, and handles concurrency.

Here is the elite engineer's guide to mastering PostgreSQL performance.

## The Anatomy of a Slow Query

Before you can optimize, you must measure. The most powerful tool in your PostgreSQL arsenal is the \`EXPLAIN ANALYZE\` command. 

While \`EXPLAIN\` shows the query planner's *estimated* execution plan, \`EXPLAIN ANALYZE\` actually executes the query and returns true execution times and row counts.

\`\`\`sql
EXPLAIN ANALYZE 
SELECT * FROM users 
WHERE last_login > '2026-01-01' 
ORDER BY created_at DESC 
LIMIT 50;
\`\`\`

When analyzing the output, look for these critical bottlenecks:
1. **Sequential Scans (Seq Scan):** The database is reading every single row in the table. In a table with 10M rows, this is catastrophic.
2. **High Shared Hit Ratios:** Are the buffers hitting memory, or are they falling back to slow disk reads?
3. **Sort Operations:** Sorting massive datasets in memory (or worse, spilling to disk) will severely degrade performance.

## Advanced Indexing Strategies

Most developers understand the basic B-Tree index. However, high-scale applications require nuanced indexing strategies.

### 1. Partial Indexes
If you frequently query a subset of data (e.g., active users, pending orders), indexing the entire table is a waste of memory and slows down \`INSERT\`/\`UPDATE\` operations.

\`\`\`sql
-- Instead of indexing all 50M orders, only index the 10K pending ones.
CREATE INDEX idx_orders_pending 
ON orders (created_at) 
WHERE status = 'pending';
\`\`\`
This partial index is tiny, fits easily into RAM, and makes queries for pending orders lightning fast.

### 2. Composite Indexes & The Rule of Left-Prefix
When creating an index on multiple columns, order matters. Postgres can only use a composite index if the query matches the columns from left to right.

If you have:
\`\`\`sql
CREATE INDEX idx_user_tenant ON users (tenant_id, department_id);
\`\`\`
A query filtering by \`tenant_id\` will use the index. A query filtering by *both* will use the index. But a query filtering *only* by \`department_id\` **will completely ignore the index**.

Always place the column with the highest cardinality (most unique values) first, or the column that is queried most frequently in isolation.

### 3. BRIN Indexes for Time-Series Data
For massive tables containing sequential data (like logs, IoT sensor data, or financial transactions), B-Tree indexes become massive and unwieldy. 

BRIN (Block Range INdexes) store the minimum and maximum values for blocks of data, making them incredibly small and highly efficient for time-series queries.

\`\`\`sql
CREATE INDEX idx_api_logs_timestamp 
ON api_logs USING BRIN (created_at);
\`\`\`

## Beating the N+1 Problem at the Database Layer

In modern ORM-driven development, the N+1 query problem is the silent killer of backend performance. While you should optimize your ORM (e.g., using Prisma's \`include\` or TypeORM's \`relations\`), sometimes it's vastly more efficient to let Postgres handle the aggregation using JSON functions.

Instead of fetching a user, and then executing a separate query for all their posts, we can aggregate directly in Postgres:

\`\`\`sql
SELECT 
  u.id, 
  u.full_name,
  json_agg(
    json_build_object(
      'post_id', p.id,
      'title', p.title
    )
  ) as recent_posts
FROM users u
LEFT JOIN posts p ON p.author_id = u.id AND p.status = 'published'
WHERE u.id = '123e4567-e89b-12d3-a456-426614174000'
GROUP BY u.id;
\`\`\`
This returns a perfectly formatted JSON structure directly to your Node.js backend in a single optimized query cycle, entirely bypassing the N+1 problem.

> [!TIP]
> If you are using Supabase, the PostgREST API under the hood automatically utilizes these JSON aggregations when you query relational data, which is why Supabase queries are remarkably fast.

## Connection Pooling: The Unsung Hero

PostgreSQL follows a process-per-connection model. Every open connection consumes roughly 10MB of RAM. If you scale your Node.js instances horizontally, and each opens 50 connections, you will rapidly exhaust your database memory, leading to connection timeouts and crashes.

You **must** use a connection pooler like PgBouncer or Supabase's built-in Supavisor. 

A connection pooler sits in front of your database, holding a small number of persistent connections open to Postgres, and multiplexing thousands of incoming client requests through them. This ensures your database CPU is spent executing queries, not managing TCP handshakes.

## Conclusion

Scaling PostgreSQL is an art of subtraction. It is about reading fewer rows, holding less data in memory, and maintaining fewer open connections. By mastering \`EXPLAIN\`, leveraging specialized indexes, and optimizing your architectural connection topology, Postgres will scale gracefully alongside your application to millions of active users.

***

### Frequently Asked Questions

**Why is my database slow even though I added an index?**
Postgres's query planner is cost-based. If it determines that scanning the whole table is cheaper (due to small table size or low cardinality), it will ignore your index. Ensure your tables are properly vacuumed and analyzed (\`VACUUM ANALYZE table_name;\`).

**What is the difference between B-Tree and Hash indexes?**
B-Tree is the default and handles equality and range queries (\`<, >, BETWEEN\`). Hash indexes are exclusively for equality (\`=\`). In modern Postgres (v10+), Hash indexes are crash-safe but generally B-Trees are preferred for 95% of use cases.

**When should I use a Materialized View?**
Use materialized views when you have highly complex, slow analytical queries (like heavy \`JOIN\`s and \`GROUP BY\`s) that power dashboards, and the data does not need to be real-time. It caches the query result as a physical table that you can refresh on a schedule.
`
  },
  {
    title: 'Designing Secure Authentication Architecture for Modern Web Apps',
    slug: 'designing-secure-authentication-architecture',
    category_slug: 'cybersecurity',
    excerpt: 'A deep dive into modern authentication patterns: JWTs, HttpOnly Cookies, OAuth2, and Zero Trust security models for enterprise-grade web applications.',
    reading_time_minutes: 9,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    content: `Authentication is the absolute foundation of your application's security posture. Yet, it remains one of the most frequently mishandled aspects of web development. Storing JWTs in \`localStorage\`, ignoring CSRF protections, and building homegrown cryptographic hashing functions are mistakes that continue to compromise modern systems.

In 2026, the standard for authentication has shifted toward seamless, zero-trust architectures. Here is how elite engineering teams design robust authentication systems.

## The JWT Fallacy: Why LocalStorage is Dangerous

The most common tutorial pattern for React applications is receiving a JSON Web Token (JWT) from a login endpoint and storing it in the browser's \`localStorage\`.

**This is a critical security vulnerability.**

\`localStorage\` is fully accessible via JavaScript. If your application (or any third-party npm package you install) suffers a Cross-Site Scripting (XSS) attack, the malicious script can instantly read your \`localStorage\` and exfiltrate your users' authentication tokens.

### The Solution: HttpOnly Secure Cookies

To secure your tokens, the authentication server must set the JWT inside an \`HttpOnly\`, \`Secure\`, \`SameSite=Strict\` cookie. 

\`\`\`javascript
res.cookie('access_token', token, {
  httpOnly: true, // Cannot be accessed via document.cookie
  secure: process.env.NODE_ENV === 'production', // HTTPS only
  sameSite: 'strict', // Prevents CSRF attacks
  maxAge: 15 * 60 * 1000 // 15 minutes
});
\`\`\`

Because the cookie is \`HttpOnly\`, malicious JavaScript cannot read it. When your React frontend makes an API call to your backend, the browser automatically attaches the cookie to the request. 

## The Dual-Token Architecture

While HttpOnly cookies solve the XSS problem, we introduce a new challenge: Token Expiration.

Access tokens should have an incredibly short lifespan (10 to 15 minutes) to minimize the attack window if the token is somehow intercepted. But forcing a user to log in every 15 minutes is terrible UX. 

We solve this using the **Access/Refresh Token pattern**.

1. **Access Token:** Short-lived (15 mins), contains user roles and claims, used to access resources. Stored in a memory variable or strict HttpOnly cookie.
2. **Refresh Token:** Long-lived (7-30 days), highly encrypted, stored in the database and linked to device fingerprints. Used *only* to request new Access Tokens.

### The Refresh Flow

When the frontend detects that the Access Token has expired (via a 401 Unauthorized response from the API), it silently intercepts the request via an Axios interceptor, pings the \`/auth/refresh\` endpoint with the Refresh Token, receives a new Access Token, and retries the original request.

> [!IMPORTANT]
> **Refresh Token Rotation:** Every time a refresh token is used, it must be invalidated and replaced with a new one. If a refresh token is used twice, it means it was compromised, and the server should immediately revoke the entire token family for that user.

## Stateless vs Stateful Authentication

There is a long-standing debate between Session-based (Stateful) and JWT-based (Stateless) authentication.

**Stateless (JWT):** The server verifies the token cryptographically without checking the database. Fast, globally scalable, excellent for microservices.
*The Catch:* You cannot easily invalidate a specific token before it expires.

**Stateful (Sessions):** The server checks a high-speed database (like Redis) for every request to ensure the session is valid. 
*The Catch:* Slightly higher latency and requires scaling the Redis cluster globally.

### The Hybrid Approach
Modern systems use a hybrid approach. The Access Token is purely stateless for ultra-fast API validation at the edge. However, the Refresh Token is stateful and stored in the database. 

If an admin needs to ban a user or revoke access immediately, they delete the Refresh Token. Within 15 minutes (when the short-lived access token expires), the user is permanently locked out.

## Outsourcing Auth: Supabase & Auth0

Building enterprise-grade authentication (handling social logins, SAML, 2FA/MFA, passwordless magic links, and hardware keys) is a massive undertaking that distracts from core product development.

Unless your core product *is* security, you should delegate authentication to dedicated identity providers. Systems like Supabase Auth or Auth0 handle the cryptographic heavy lifting, edge-level validation, and rate limiting out of the box.

For example, implementing OAuth2 with Supabase is remarkably simple, while remaining highly secure:

\`\`\`typescript
import { supabase } from '@/lib/supabase'

export async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'https://gaganshukla.in/auth/callback'
    }
  })
}
\`\`\`

## Conclusion

A secure authentication system is completely invisible to the user but represents an impenetrable fortress to attackers. By abandoning \`localStorage\`, implementing strict HttpOnly cookies, leveraging token rotation, and embracing modern identity providers, you ensure your application remains uncompromised at scale.

***

### Frequently Asked Questions

**What is a CSRF attack and how do HttpOnly cookies prevent it?**
Cross-Site Request Forgery (CSRF) occurs when a malicious site tricks the browser into sending an authenticated request to your API. Setting the cookie attribute \`SameSite=Strict\` ensures the browser only sends the cookie if the request originates from your exact domain, stopping CSRF entirely.

**Can I store user data inside a JWT?**
Yes, but only non-sensitive data (like \`user_id\`, \`role\`, \`name\`). JWTs are base64 encoded, not encrypted. Anyone who intercepts a JWT can easily decode and read its payload. Never store passwords, PII, or API keys inside a JWT.

**How do I handle authentication in Server-Side Rendered (SSR) apps like Next.js?**
Because SSR requires the server to know the user's state before rendering the HTML, tokens must be stored in cookies. The Next.js server can read incoming cookies, validate the JWT, and render the protected page before shipping it to the client.
`
  },
  {
    title: 'React 19 State Management: Context, Signals, and the Future',
    slug: 'mastering-state-management-react-19',
    category_slug: 'frontend-architecture',
    excerpt: 'Explore the future of React state management in 2026. A comprehensive guide comparing Context API, Zustand, Signals, and React Compiler optimizations.',
    reading_time_minutes: 10,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    content: `For years, the React ecosystem has been locked in a philosophical battle over state management. From the boilerplate-heavy days of Redux to the simplicity of the Context API, developers have continuously sought the perfect balance between global state accessibility and rendering performance.

With the release of React 19 and the maturation of the React Compiler, the landscape has fundamentally shifted. Here is how modern, high-performance applications should handle state in 2026.

## The Problem with Context

The React Context API is fantastic for dependency injection (passing themes, user auth tokens, or routing information). However, using it for high-frequency global state is a performance disaster.

When a value inside a Context Provider changes, **every single component** that consumes that context re-renders, regardless of whether it actually uses the specific property that changed.

\`\`\`jsx
// If \`cartCount\` updates, the \`UserProfile\` component will re-render 
// even though it only cares about \`user\`.
const { user, cartCount } = useContext(GlobalAppContext);
\`\`\`

While memoization (\`useMemo\`, \`React.memo\`) historically solved this, it led to codebase bloat. In React 19, the React Compiler automatically memoizes component outputs, which heavily mitigates Context performance issues, but it still fundamentally relies on the Virtual DOM diffing algorithm.

## Zustand: The Modern Standard

For global state that doesn't require complex asynchronous orchestration, **Zustand** has emerged as the definitive standard for enterprise applications.

Zustand bypasses Context entirely. It relies on module-level state and custom hooks that subscribe *only* to the exact slice of data a component needs. 

\`\`\`javascript
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

// Inside your component:
// This component will ONLY re-render when \`bears\` changes.
const bears = useBearStore((state) => state.bears)
\`\`\`

Zustand is infinitesimally small, unopinionated, and blazingly fast. It completely eliminates unnecessary re-renders without forcing you to wrap your entire application in massive Provider trees.

## The Rise of Signals

If Zustand optimizes the React render cycle, **Signals** attempt to bypass it entirely.

Popularized by SolidJS and Preact, Signals are reactive primitives that hold state. When a Signal changes value, it doesn't trigger a top-down re-render of the component tree. Instead, it updates the specific DOM node directly.

While React doesn't support true Signals natively (yet), libraries like \`@preact/signals-react\` provide this paradigm within React.

\`\`\`jsx
import { signal } from "@preact/signals-react";

// The state lives outside the component
const count = signal(0);

function Counter() {
  // Clicking the button directly mutates the text node. 
  // The \`<Counter />\` component NEVER re-renders!
  return (
    <button onClick={() => count.value++}>
      Count: {count}
    </button>
  );
}
\`\`\`
Signals represent the absolute pinnacle of frontend performance. For highly interactive applications—like collaborative canvas tools (Figma), trading dashboards, or complex data grids—Signals are non-negotiable.

## Server State vs Client State

The most critical architectural mistake developers make is treating **Server State** (data fetched from an API) the same as **Client State** (is a modal open, what is typed in this input).

You should **never** put API responses into a global Zustand store or Context provider. 

Server state is asynchronous, inherently stale, and requires caching, retry logic, and background refetching. This should be exclusively handled by dedicated async libraries like **TanStack Query (React Query)** or standard Next.js Server Components.

\`\`\`jsx
// Correct: Use React Query for Server State
const { data, isLoading } = useQuery({ 
  queryKey: ['user', userId], 
  queryFn: fetchUser 
});
\`\`\`

## The 2026 State Management Architecture Blueprint

If you are starting a scalable enterprise React application today, adhere to this strict separation of concerns:

1. **Server Components (RSC):** Fetch initial data directly on the server. Pass it to client components as static props.
2. **TanStack Query / SWR:** Manage all client-side data fetching, caching, and synchronization.
3. **Zustand:** Manage global client state (e.g., active theme, global UI toggles, shopping cart).
4. **\`useState\` / \`useReducer\`:** Manage localized component state (e.g., controlled form inputs, dropdown open/close).
5. **Context API:** Strictly for dependency injection (e.g., providing a Supabase client instance deep into the tree).

By rigidly separating your state according to its lifecycle and frequency of mutation, your application will achieve maximum performance while remaining highly readable and maintainable.

***

### Frequently Asked Questions

**Is Redux dead?**
Redux Toolkit (RTK) is still highly prevalent in legacy enterprise codebases, and it remains a robust architecture. However, for new projects, the sheer velocity and developer experience of Zustand makes Redux increasingly difficult to justify.

**Do I still need \`useMemo\` in React 19?**
With the introduction of the React Compiler, the compiler automatically determines which values and components need to be memoized during the build step. In 95% of cases, you no longer need to write \`useMemo\` or \`useCallback\` manually.

**Can I use Zustand in Next.js Server Components?**
No. Zustand (and all client-side state managers) rely on React hooks (\`useState\`, \`useEffect\`) and browser memory. Server Components execute entirely on the backend and have no concept of persistent client state.
`
  },
  {
    title: 'Modern API Security: Rate Limiting, CORS, and Zero Trust',
    slug: 'modern-api-security-best-practices',
    category_slug: 'cybersecurity',
    excerpt: 'Learn enterprise-grade API security best practices. Defend against DDoS, implement strict CORS, handle API versioning, and leverage zero-trust architecture.',
    reading_time_minutes: 12,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    content: `Exposing an API to the public internet is akin to opening a storefront on the busiest, most dangerous street in the world. Within minutes of deployment, automated botnets, vulnerability scanners, and malicious actors will begin probing your endpoints for weaknesses.

To build APIs that power enterprise applications, simply validating a JWT is no longer enough. You must implement defensive, zero-trust architectures at every layer of the network stack.

Here is how elite engineering teams secure highly scalable APIs in 2026.

## The API Gateway: Your First Line of Defense

Never expose your application servers directly to the internet. All incoming traffic must first pass through an API Gateway or a Web Application Firewall (WAF) such as Cloudflare, AWS API Gateway, or Kong.

The API Gateway is responsible for terminating SSL/TLS connections, filtering out malformed requests, and blocking known malicious IP ranges before they ever reach your Node.js or Express runtime. This offloads immense CPU overhead from your application logic.

## Advanced Rate Limiting Strategies

A simple rate limiter restricts an IP address to $N$ requests per minute. While necessary, this naive approach is easily bypassed by attackers rotating through distributed proxy networks.

Modern rate limiting must be multi-dimensional:

1. **IP-Based Throttling:** The baseline. Limit requests per IP address to prevent brute-force attacks.
2. **User-Based Throttling:** Limit requests per authenticated \`user_id\`. This prevents a malicious user from routing their attacks through 500 different IP proxies.
3. **Endpoint Specific Quotas:** An endpoint like \`GET /posts\` can handle 100 req/sec. An endpoint like \`POST /auth/login\` or \`POST /reset-password\` should be hard-capped at 3 req/minute to prevent brute-forcing.

### Implementing Redis-backed Rate Limiting

In distributed systems, an in-memory rate limiter on a single Node instance will fail. You must use a centralized fast-storage system like Redis to track quotas globally.

\`\`\`javascript
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import { redisClient } from './redis.js';

export const loginRateLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many login attempts. Please try again later.' }
});
\`\`\`

## CORS: The Misunderstood Shield

Cross-Origin Resource Sharing (CORS) is a browser security mechanism, not a backend firewall. It prevents a malicious website (e.g., \`evil.com\`) from making authenticated AJAX requests to your API (\`api.yourdomain.com\`) on behalf of a victim user.

Many developers, frustrated by CORS errors during development, set \`Access-Control-Allow-Origin: *\`. **This is catastrophic for authenticated APIs.**

Strict CORS configuration is mandatory:

\`\`\`javascript
import cors from 'cors';

const allowedOrigins = [
  'https://gaganshukla.in',
  'https://admin.gaganshukla.in'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('Blocked by CORS Policy'), false);
    }
    return callback(null, true);
  },
  credentials: true, // Crucial for accepting HttpOnly cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
\`\`\`

## Preventing Data Exposure through Pagination

One of the most devastating forms of API abuse is data scraping. If you expose an endpoint like \`GET /users\`, an attacker can write a script to download your entire database.

Pagination is not just for UI/UX; it is a critical security measure.

1. **Hard Limits:** Always enforce a maximum \`limit\` (e.g., \`limit=100\`). If a client requests \`limit=10000\`, truncate it to 100 on the backend.
2. **Cursor Pagination:** For massive datasets, offset/limit pagination degrades the database because it requires scanning all preceding rows. Cursor-based pagination (\`?after=cursor_id\`) relies on indexes and operates in $O(1)$ time complexity.

## Zero Trust and Input Sanitization

The core tenet of Zero Trust is: **Never trust the client.**

Every single byte of data entering your API must be validated, sanitized, and typed before it touches your database. If you expect a string, ensure it isn't an object containing a MongoDB \`$ne\` operator (NoSQL injection). If you expect an integer, ensure it isn't a massive buffer designed to crash your Node runtime.

Libraries like \`Zod\` or \`Joi\` are non-negotiable for modern REST APIs.

\`\`\`typescript
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(12).max(100),
  age: z.number().int().min(18).max(120).optional()
});

export const validatePayload = (req, res, next) => {
  try {
    req.body = userSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};
\`\`\`

## Conclusion

API Security is a layered defense model. By utilizing edge-based firewalls, implementing sophisticated rate limiting, rigidly enforcing CORS policies, and strictly validating payloads, you insulate your core application logic from the chaos of the public internet. Secure by default is the only way to build for the future.

***

### Frequently Asked Questions

**Can CORS prevent server-to-server attacks?**
No. CORS is enforced by the web browser. If an attacker uses \`cURL\`, Postman, or a Python script to hit your API, CORS is completely bypassed. This is why rate limiting and authentication are vital.

**What is the difference between a WAF and an API Gateway?**
An API Gateway focuses on routing, rate limiting, and analytics (handling traffic). A Web Application Firewall (WAF) inspects the actual payload of the traffic, blocking SQL injections, cross-site scripting attempts, and known malicious IPs before they reach the gateway.

**Why should I limit the size of incoming JSON payloads?**
If you don't limit payload sizes (e.g., \`express.json({ limit: '10kb' })\`), an attacker can send a 500MB JSON object. Parsing this massive object in memory will block Node's single thread and crash your server, resulting in an immediate Denial of Service (DoS).
`
  },
  {
    title: 'Web Performance Optimization: Core Web Vitals & Business Impact',
    slug: 'web-performance-core-web-vitals-business-impact',
    category_slug: 'web-performance',
    excerpt: 'A deep dive into Core Web Vitals. Understand how LCP, CLS, and INP directly correlate to SEO rankings, user retention, and enterprise revenue.',
    reading_time_minutes: 9,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    content: `There is a dangerous misconception in product development that web performance is merely an engineering vanity metric. Designers push for larger, higher-fidelity media; marketing pushes for more third-party tracking scripts; and developers are left trying to make a 5MB payload load instantly on a 3G mobile connection.

The reality, supported by a decade of data from Google, Amazon, and Pinterest, is that **performance is a direct multiplier on revenue.**

In modern web development, achieving exceptional performance means mastering Google's Core Web Vitals. Here is a technical breakdown of these metrics and how elite teams optimize them.

## The Business Cost of Milliseconds

Before discussing implementation, the financial impact of latency must be understood:
- **Pinterest** reduced perceived wait times by 40% and increased search engine traffic and sign-ups by 15%.
- **BBC** found they lost an additional 10% of users for every additional second their site took to load.
- **Google** uses Core Web Vitals as a direct ranking factor. A slow site simply will not rank on page one, no matter how good the content is.

## 1. Largest Contentful Paint (LCP)

LCP measures loading performance. It marks the precise time in the page load timeline when the largest text block or image element is rendered on screen. To provide a good user experience, LCP should occur within **2.5 seconds**.

### How to Optimize LCP:
The most common cause of terrible LCP is massive hero images or client-side rendering (CSR) blocking the text render.

1. **Server-Side Rendering (SSR) / Static Generation (SSG):** Never use a client-side React app to fetch data before rendering the primary hero text. The HTML structure should be shipped directly from the edge.
2. **Image Optimization:** Serve modern formats (\`WebP\`, \`AVIF\`). Preload your critical hero image by injecting \`<link rel="preload" as="image" href="hero.avif">\` into the document head.
3. **Priority Hints:** Add the \`fetchpriority="high"\` attribute to your hero image to signal to the browser that this asset takes precedence over background network requests.

\`\`\`html
<!-- Critical Hero Image loading -->
<img 
  src="/hero-banner.webp" 
  alt="Engineering Solutions" 
  fetchpriority="high" 
  decoding="async"
>
\`\`\`

## 2. Cumulative Layout Shift (CLS)

CLS measures visual stability. Have you ever been reading an article on your phone, only for an ad to load dynamically and push the text down, causing you to click the wrong link? That is layout shift. An ideal CLS score is **less than 0.1**.

### How to Optimize CLS:
1. **Explicit Dimensions:** Never serve an image or a video without explicitly declaring its \`width\` and \`height\` attributes. The browser needs to reserve the layout space before the asset actually downloads.
2. **Reserved Ad Slots:** If you are injecting dynamic content (like ads, banners, or loaded comments), wrap them in a container div with a \`min-height\` that matches the expected content size.
3. **Font Loading:** Use \`font-display: optional\` or \`font-display: swap\` to prevent FOIT (Flash of Invisible Text), and utilize CSS size-adjust metrics to ensure your fallback font has the exact same layout boundaries as your custom web font.

## 3. Interaction to Next Paint (INP)

Replacing First Input Delay (FID), Interaction to Next Paint (INP) measures the application's responsiveness to user interactions. If a user clicks a button, how long does it take for the browser to visually acknowledge that click? An excellent INP is **under 200 milliseconds**.

### How to Optimize INP:
Poor INP is almost entirely caused by the browser's Main Thread being blocked by heavy JavaScript execution.

1. **Yield to the Main Thread:** If you are executing a massive data parsing script (e.g., sorting 10,000 array items), break the task up using \`setTimeout\` or \`requestIdleCallback\`. This allows the browser to pause your script, process the user's click, and then resume execution.
2. **Debounce Inputs:** If a user is typing into a search bar, do not execute an API request and DOM re-render on every single keystroke. Debounce the action by 300ms.
3. **Web Workers:** For mathematically intense operations (like client-side image compression or cryptography), move the execution off the main thread entirely and into a Web Worker.

## The Role of Third-Party Scripts

The fastest application in the world will grind to a halt if you inject 15 unoptimized tracking scripts into the \`<head>\`.

Marketing pixels, analytics tags, and chat widgets are notorious for blocking the main thread. 

**The Golden Rule:** Defer everything non-critical. Use the \`defer\` attribute on script tags, or better yet, load them via a Web Worker using libraries like **Partytown**. This executes third-party scripts in a background thread, completely eliminating their impact on your INP and main thread execution.

## Conclusion

Performance optimization is a continuous, iterative process. It requires treating bytes shipped to the client with the same scrutiny as financial budgets. By architecting for Server-Side Rendering, ruthlessly optimizing media, and protecting the main thread, you ensure your application remains a premium, instantaneous experience that converts users and dominates search rankings.

***

### Frequently Asked Questions

**Is a 100/100 Lighthouse score necessary?**
No. Lighthouse is a simulated lab environment. While it is a fantastic diagnostic tool, what actually matters is Field Data (CrUX data), which measures how real users on real devices experience your site.

**Does using a CDN guarantee fast load times?**
A CDN ensures that static assets travel a shorter physical distance to the user, improving TTFB (Time to First Byte). However, if your React bundle is 4MB in size, a CDN won't save you from the massive CPU time required to parse and execute that JavaScript.

**What is the difference between \`async\` and \`defer\` in scripts?**
Both attributes allow the HTML parser to continue reading the document while the script downloads. However, \`async\` executes the script immediately after it finishes downloading (which can block the render if the HTML isn't finished). \`defer\` guarantees the script will not execute until the entire HTML document has been fully parsed.
`
  },
  {
    title: 'The Rise of Edge Databases: SQLite, Turso, and Supabase Edge',
    slug: 'rise-of-edge-databases-sqlite-turso-supabase',
    category_slug: 'database-optimization',
    excerpt: 'Why modern full-stack architectures are moving away from centralized Postgres servers and pushing data to the absolute edge with SQLite and distributed replicas.',
    reading_time_minutes: 5,
    is_featured: true,
    cover_image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    content: `## The Edge Database Revolution\n\nFor decades, the standard web architecture involved a stateless compute layer (like Node.js or edge functions) communicating with a monolithic, centralized database server. This created an unavoidable physics problem: if your edge function is running in Tokyo but your Postgres database is in US-East, you still suffer massive latency overhead.\n\nIn 2026, the paradigm has shifted. We are no longer just pushing compute to the edge; we are pushing the data itself.\n\n### SQLite at the Edge (Turso)\nSQLite is no longer just for local mobile storage. Technologies like libSQL (the open-source fork of SQLite) and Turso have made SQLite distributed and queryable over HTTP. You can now replicate your entire database to hundreds of edge nodes globally. \n\nWhen a user in London queries your app, the read hits a London-based SQLite replica in less than 5 milliseconds.\n\n### Supabase Edge and Read Replicas\nSupabase has countered by introducing distributed read replicas and Edge Functions that connect directly to local Postgres caches. By leveraging Row Level Security (RLS) directly at the edge, Supabase maintains security while drastically reducing Time to First Byte (TTFB).\n\n### Conclusion\nIf you are building a globally scaled application today, relying on a single monolithic database region is an anti-pattern. Adopting edge databases dramatically improves UX and resilience.`
  },
  {
    title: 'Optimizing React Native Performance: Identifying and Fixing Memory Leaks',
    slug: 'optimizing-react-native-memory-leaks',
    category_slug: 'frontend-architecture',
    excerpt: 'A deep dive into advanced debugging techniques for hunting down memory leaks, unclosed listeners, and zombie components in large-scale React Native applications.',
    reading_time_minutes: 6,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    content: `## The Silent Killer: Memory Leaks\n\nYou've built a beautiful React Native application. It runs perfectly on your simulator. But after deploying it, users start complaining that the app crashes or becomes unbearably slow after 15 minutes of usage.\n\nYou likely have a memory leak. In React Native, memory leaks are almost always caused by holding onto references of unmounted components.\n\n### 1. Unclosed Subscriptions and Event Listeners\nThe most common culprit is failing to clean up listeners in \`useEffect\`. If you subscribe to a WebSocket, Firebase, or Supabase channel and forget to unsubscribe on unmount, the component stays in memory forever.\n\n\`\`\`javascript\n// ❌ BAD: The listener keeps the component alive after unmount\nuseEffect(() => {\n  supabase.channel('chat').on('postgres_changes', callback).subscribe();\n}, []);\n\n// ✅ GOOD: Always return a cleanup function\nuseEffect(() => {\n  const channel = supabase.channel('chat').on('postgres_changes', callback).subscribe();\n  return () => { supabase.removeChannel(channel); };\n}, []);\n\`\`\`\n\n### 2. Zombie Closures in State Management\nIf you are using Redux or Zustand, be careful about capturing component state inside a thunk or action that outlives the component. \n\n### 3. Profiling with Flipper\nTo hunt down these leaks, you must use the React Native Profiler (or Flipper). Take a memory heap snapshot, navigate back and forth between screens 5 times, and take another snapshot. If the number of mounted \`View\` instances keeps climbing, you have found your leak.`
  },
  {
    title: 'WebSockets vs Server-Sent Events (SSE): Architecting Real-Time Apps',
    slug: 'websockets-vs-sse-real-time-chat',
    category_slug: 'architecture',
    excerpt: 'When should you use WebSockets, Server-Sent Events, or Long Polling? A technical breakdown of real-time protocols for modern applications.',
    reading_time_minutes: 4,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    content: `## The Real-Time Dilemma\n\nBuilding a chat application, live dashboard, or collaborative document editor requires real-time data sync. For years, the default answer was "just use WebSockets." However, as architectures move toward serverless and edge compute, maintaining persistent WebSocket connections has become an expensive infrastructure challenge.\n\n### WebSockets: Bidirectional Power\nWebSockets provide a full-duplex, persistent connection over TCP. Both the client and server can push messages at any time with virtually zero overhead. \n- **Best for:** Multiplayer games, collaborative editing (like Figma), and high-frequency trading dashboards.\n- **Drawback:** They are stateful. Load balancing WebSocket servers requires complex sticky sessions and Redis pub/sub backplanes.\n\n### Server-Sent Events (SSE): The Lightweight Alternative\nSSE operates over standard HTTP. It provides a unidirectional flow of data from the server to the client. The client opens a request, and the server keeps the stream open to push text data indefinitely.\n- **Best for:** Live sports scores, AI streaming responses (like ChatGPT), and live social media feeds.\n- **Advantage:** Because SSE uses standard HTTP, it automatically works with standard load balancers, HTTP/2 multiplexing, and corporate firewalls.\n\n### The Verdict\nDo not default to WebSockets unless your client is pushing high-frequency data back to the server. For 80% of use cases (including notifications and live feeds), Server-Sent Events (SSE) offer a massively simpler and more scalable architecture.`
  },
  {
    title: 'Monorepos in 2026: Managing Full-Stack Apps with Turborepo and Nx',
    slug: 'monorepos-2026-turborepo-nx',
    category_slug: 'architecture',
    excerpt: 'Why multi-repo architectures are dying, and how to structure enterprise codebases using modern monorepo build systems.',
    reading_time_minutes: 5,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop',
    content: `## The Death of the Multi-Repo\n\nFive years ago, a standard startup architecture looked like this: one GitHub repository for the React frontend, one for the Node.js backend, and one for the React Native mobile app. \n\nThe result? Code duplication. Defining the \`User\` TypeScript interface in three different places, constantly battling version mismatches, and copy-pasting utility functions.\n\n### The Monorepo Solution\nA monorepo stores your frontend, backend, mobile app, and shared libraries inside a single Git repository. \n\nWith tools like **Turborepo** and **Nx**, managing this complexity has become trivial.\n\n### Shared Packages\nIn a modern Turborepo setup, you can create a \`packages/ui\` folder for your React component library and a \`packages/types\` folder for your database schemas. Both your Next.js web app and your React Native mobile app can simply import these local packages. Update the button component once, and both apps are instantly updated.\n\n### Remote Caching\nThe true superpower of Turborepo and Nx is build caching. If you run a build on your local machine, the build artifacts are uploaded to a remote cache (like Vercel). When your CI/CD pipeline runs on GitHub Actions, it simply downloads the cached build in seconds instead of recompiling the entire application.\n\n### Conclusion\nIf you are building a product that spans web, mobile, and backend, a monorepo is no longer optional—it is a mandatory architectural requirement for maintaining developer sanity.`
  },
  {
    title: 'Securing Cross-Platform Mobile Applications: Best Practices for Flutter',
    slug: 'securing-cross-platform-mobile-applications',
    category_slug: 'cybersecurity',
    excerpt: 'Stop storing API keys in your code. A masterclass in securing Flutter and React Native apps against reverse engineering and man-in-the-middle attacks.',
    reading_time_minutes: 6,
    is_featured: false,
    cover_image_url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop',
    content: `## Your Mobile App is a Public API\n\nThe most dangerous assumption a mobile developer can make is believing the code on a user's device is secure. It is trivially easy to download an APK, decompile the JavaScript bundle (React Native) or the Dart binaries (Flutter), and extract hardcoded secrets.\n\n### 1. Never Hardcode API Keys\nIf you hardcode a Google Maps API key or a Stripe secret directly in your Dart or JS code, a hacker will find it. You must use \`.env\` files during development, but more importantly, **never ship private keys to the client**. \n\nYour mobile app should only talk to your backend server, and your backend server should talk to the third-party APIs using the private keys.\n\n### 2. Certificate Pinning\nBy default, mobile apps trust the SSL certificates installed on the device. A hacker can install a proxy (like Charles or Burp Suite), install a root certificate on their phone, and read all of your app's API traffic in plain text.\n\nTo prevent this Man-in-the-Middle (MITM) attack, implement **Certificate Pinning**. This forces your app to strictly verify that the server's certificate exactly matches a known, hardcoded hash. If the hashes don't match, the app instantly severs the connection.\n\n### 3. Obfuscation and RASP\nWhile no app is 100% un-hackable, you must increase the difficulty. Use tools like ProGuard (Android) to obfuscate code. Implement Runtime Application Self-Protection (RASP) to detect if your app is running on a jailbroken/rooted device or inside an emulator, and shut down sensitive features if detected.\n\nSecurity is not a feature; it is an architectural baseline.`
  }
];

async function seed() {
  console.log('Seeding Supabase Database...');

  // 1. Insert Categories
  for (const cat of categories) {
    const { error } = await supabase.from('blog_categories').upsert({
      name: cat.name,
      slug: cat.slug,
      description: cat.description
    }, { onConflict: 'slug' });
    if (error) console.error('Error inserting category', cat.slug, error);
  }
  console.log('Categories seeded.');

  // 2. Insert Author
  // Try to find existing author first
  let { data: authorData } = await supabase
    .from('blog_authors')
    .select('id')
    .eq('full_name', author.full_name)
    .single();

  if (!authorData) {
    // Insert new author
    const { data: insertedAuthor, error: authorError } = await supabase
      .from('blog_authors')
      .insert({
        full_name: author.full_name,
        bio: author.bio,
        avatar_url: author.avatar_url,
        twitter_handle: author.twitter_handle,
        github_handle: author.github_handle
      })
      .select()
      .single();
    
    if (authorError) {
      console.error('Error inserting author', authorError);
      return;
    }
    authorData = insertedAuthor;
  }
  console.log('Author seeded.', authorData.id);

  // 3. Insert Blogs
  // Get category IDs
  const { data: catData } = await supabase.from('blog_categories').select('id, slug');
  const catMap = catData.reduce((acc, c) => ({ ...acc, [c.slug]: c.id }), {});

  for (const blog of blogs) {
    const { error } = await supabase.from('blogs').upsert({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      cover_image_url: blog.cover_image_url,
      reading_time_minutes: blog.reading_time_minutes,
      is_featured: blog.is_featured,
      status: 'published',
      published_at: new Date().toISOString(),
      author_id: authorData.id,
      category_id: catMap[blog.category_slug],
      category_slug: blog.category_slug
    }, { onConflict: 'slug' });
    
    if (error) console.error('Error inserting blog', blog.slug, error);
  }
  console.log('Blogs seeded successfully!');
}

seed().catch(console.error);
