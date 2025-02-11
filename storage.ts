import { Contact, InsertContact, contacts } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  updateContact(id: number, contact: InsertContact): Promise<Contact | undefined>;
  deleteContact(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getContact(id: number): Promise<Contact | undefined> {
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const existing = await db
      .select()
      .from(contacts)
      .where(eq(contacts.email, contact.email));

    if (existing.length > 0) {
      throw new Error("A contact with this email address already exists in your contacts list");
    }

    const result = await db
      .insert(contacts)
      .values(contact)
      .returning();
    return result[0];
  }

  async updateContact(
    id: number,
    updateContact: InsertContact,
  ): Promise<Contact | undefined> {
    const [updated] = await db
      .update(contacts)
      .set(updateContact)
      .where(eq(contacts.id, id))
      .returning();
    return updated;
  }

  async deleteContact(id: number): Promise<boolean> {
    const [deleted] = await db
      .delete(contacts)
      .where(eq(contacts.id, id))
      .returning();
    return !!deleted;
  }
}

export const storage = new DatabaseStorage();