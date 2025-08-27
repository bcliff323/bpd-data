# How to Install:

1. Download [Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. Open Docker Desktop

3. Run this in your terminal to create the `bpd-data` container, as well as the `copdb` postgres database:
   ```
   docker compose up -d --build
   ```

4) Check Docker Desktop container dashboard to see if the bpd-data container was created.

5. Connect to the database using this:

   ```
   docker exec -it bpd_data psql -h localhost -U user copdb
   ```

6. Enable expanded display to give yourself better terminal formatting `\x`.

   ```
   [copdb=# \x
   Expanded display is on.
   ```

7. Type `\l` to display all databases. You should see `copdb` in the list.

   ```
   List of databases
   -[ RECORD 1 ]-----+----------------------
   Name              | copdb
   Owner             | postgres
   Encoding          | UTF8
   Locale Provider   | libc
   Collate           | en_US.utf8
   Ctype             | en_US.utf8
   Locale            |
   ICU Rules         |
   Access privileges |
   ```

8. Verify the tables were created by typing `\dt`. You can also check to see if the columns were created.

   ```
   				List of relations
   Schema |   Name    | Type  |  Owner
   --------+-----------+-------+----------
   public | arrests   | table | postgres
   public | incidents | table | postgres
   ```
