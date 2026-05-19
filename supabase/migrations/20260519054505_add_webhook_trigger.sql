CREATE TRIGGER "send_contact_email_webhook"
  AFTER INSERT ON "public"."contact_messages"
  FOR EACH ROW
  EXECUTE FUNCTION "supabase_functions"."http_request"(
    'https://qpnzbvbphcernovgmjxa.supabase.co/functions/v1/send-contact-email',
    'POST',
    '{"Content-type":"application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbnpidmJwaGNlcm5vdmdtanhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNTYyNzgsImV4cCI6MjA5NDczMjI3OH0.0cTbvc2FCgDFJG3-vWY7e6NY2v1Y9HXDt9BgQ3eOG3s"}',
    '{}',
    '5000'
  );
