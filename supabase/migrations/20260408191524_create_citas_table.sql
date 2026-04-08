/*
  # Create citas (appointment requests) table

  1. New Tables
    - `citas`
      - `id` (uuid, primary key)
      - `nombre` (text) - patient full name
      - `email` (text) - patient email
      - `telefono` (text) - patient phone number
      - `servicio` (text) - service of interest
      - `mensaje` (text) - optional message
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `citas` table
    - Allow anonymous users to insert (public form submission)
    - Only authenticated users (clinic staff) can read/update/delete
*/

CREATE TABLE IF NOT EXISTS citas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  telefono text NOT NULL DEFAULT '',
  servicio text NOT NULL DEFAULT '',
  mensaje text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE citas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit appointment requests"
  ON citas FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated staff can view citas"
  ON citas FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated staff can update citas"
  ON citas FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated staff can delete citas"
  ON citas FOR DELETE
  TO authenticated
  USING (true);
